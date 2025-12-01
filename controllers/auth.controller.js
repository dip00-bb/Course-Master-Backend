import { registerUser } from "../service/auth.service.js";

export async function register(req, res, next) {
    try {
        const user = await registerUser(req.body)

        res.cookie('token', user.token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7
        })
        res.status(201).json({user:user.data})
    } catch (error) {
        next(error)
    }
}