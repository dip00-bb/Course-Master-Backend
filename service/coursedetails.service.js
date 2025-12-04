
import Course from "../models/Course.js"

export const getCourseDetails = async (id) => {
    try {
        const courseDetails = await Course.findById(id);
        console.log(courseDetails)
        return {
            data: courseDetails,
            success: true,
            message: "Failed to load data"
        }


    } catch (error) {
        return {
            data: [],
            success: false,
            message: "Failed to load data"
        }

    }
}