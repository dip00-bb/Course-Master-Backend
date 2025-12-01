import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt'



export async function registerUser({ name, email, password }) {
    console.log(email)

    if (!email) {
        throw new Error("Email Require")
    }
    const isUserAlreadyExist = await User.find({ email });
    if (!isUserAlreadyExist) {
        throw new Error("Email already register")

    } else {
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({ name, email, password: hashedPassword, role: "student" })

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_LIFE_TIME || '7d' })

        return { token, data: { id: user._id, name: user.name, role: user.role } }

    }
}