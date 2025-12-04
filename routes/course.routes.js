import { Router } from "express";
import { homeCourses } from "../controllers/course.controller.js";


const router = Router()

router.get('/home-course', homeCourses)

export default router