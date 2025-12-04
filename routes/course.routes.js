import { Router } from "express";
import { homeCourses } from "../controllers/course.controller.js";
import { getDetails } from "../controllers/coursedetails.controller.js";


const router = Router()

router.get('/home-course', homeCourses)
router.get('/home-course/:id',getDetails)

export default router