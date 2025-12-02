import * as z from "zod"

export const registerSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.email(),
  password: z.string().min(8)
})

export const loginSchema=z.object({
  email:z.email(),
  password:z.string().min(8)
})