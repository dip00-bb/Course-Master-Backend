import { getHomeCourses } from "../service/courses.services.js"


export async function homeCourses(req, res, next) {
    const result = await getHomeCourses(req.query)
    if (result.success) {
        const courses = result.courses
        res.status(200).json({ courses })
    } else {
        res.status(500).json({ message: "Failed to fetch data" })
        next()
    }
}