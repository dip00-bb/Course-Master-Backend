import { getCourseDetails } from "../service/coursedetails.service.js"

export const getDetails=async(req,res)=>{
    const details=await getCourseDetails(req.params.id);
    if(details.success){
        res.status(200).json({data:details.data})
    }else{
        res.status(500).json({data:[]})
    }
}