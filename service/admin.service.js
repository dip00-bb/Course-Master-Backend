
import Course from "../models/Course.js";

export async function createNewCourse(data) {
    try {
        const { title, instructorName, syllabus, price, category, thumbline, tags, lessons, batches } = data

        const newPost = await Course.create({
            title,
            instructorName,
            syllabus,
            price,
            category,
            thumbline,
            tags,
            lessons,
            batches
        })

        return {
            post: newPost,
            success: true,
            message: "Course created successfully"
        }
    } catch (error) {
        return {
            success:false,
            message:"Something went wrong"
        }
    }
}