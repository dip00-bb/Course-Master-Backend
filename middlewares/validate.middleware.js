import { ZodError } from "zod"

export function validate(schema) {
    return (req, res, next) => {
        try {
            const result = schema.safeParse(req.body)
            if (result.success) {
                req.body = result.data
                next()
            }else{
                if(result.error instanceof ZodError){
                    console.log(result.error)
                    res.status(400).json({success:false,message:"Please provide correct information"})
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
}