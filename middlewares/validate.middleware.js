import { ZodError } from "zod"

export function validate(schema) {
    return (req, res, next) => {
        console.log(req.body)
        try {
            const result = schema.safeParse(req.body)
            req.body = result.data
            next()
        } catch (error) {
            if (error instanceof ZodError) {
                console.log(error.issues[0].message)
            }
        }
    }
}