import { Router } from "express";
import { createCourse } from "../controllers/admin.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { courseSchema } from "../validators/course.schema.js";


const router=Router()

router.post('/create-course', createCourse)

export default router