import { Router } from "express";
import { createCourse } from "../controllers/admin.controller.js";


const router=Router()

router.post('/create-course',createCourse)

export default router