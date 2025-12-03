
import { createNewCourse } from "../service/admin.service.js";

export async function createCourse(req, res) {
    try {
        
        const result = await createNewCourse(req.body)
        if (result.success) {
            res.status(200).json({ success: result.success, message: result.message })
        } else {
            res.status(500).json({ success: result.success, message: result.message })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something Went Wrong" })
    }
}