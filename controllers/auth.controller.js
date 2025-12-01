import { loginUser, registerUser } from "../service/auth.service.js";



const saveTokenInCookie = (res, user) => {
    res.cookie('token', user.token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    })
}

export async function register(req, res, next) {
    try {
        const user = await registerUser(req.body)

        saveTokenInCookie(res, user)

        res.status(201).json({ user: user.data })
    } catch (error) {
        next(error)
    }
}


export async function login(req, res, next) {
    try {
        const user = await loginUser(req.body)
        saveTokenInCookie(res, user)
        res.status(201).json({ user: user.data })
    } catch (error) {
        next(error)
    }
}


export async function logout(req, res) {
    res.clearCookie('token')
    res.json({ message: "Logged Out" })
}