import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt'

const generateToken = (user) => {
    console.log(user._id)
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_LIFE_TIME || '7d' })
}

export async function registerUser({ name, email, password }) {

    if (!email) {
        throw new Error("Email Require")
    }
    const isUserAlreadyExist = await User.find({ email });
    if (!isUserAlreadyExist) {
        throw new Error("Email already register")

    } else {
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({ name, email, password: hashedPassword, role: "student" })
        const token = generateToken(user)
        return { token, data: { id: user._id, name: user.name, role: user.role } }

    }
}


export async function loginUser({ email, password }) {
    console.log(email, password)
    const existUser = await User.find({ email })

    if (!existUser) {
        throw new Error("Invalid user")
    } else {
        const user = existUser[0]
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            const err = new Error("Invalid Credential"); err.status = 401; throw err
        }
        else {
            const token = generateToken(user)
            return { token, data: { id: user._id, name: user.name, role: user.role } }
        }
    }
}