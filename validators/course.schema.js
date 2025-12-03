import z from "zod";

export const courseSchema=z.object({
    title:z.string(),
    description:z.string(),
    instructorName:z.string(),
    syllabus:z.array(
        z.object({
            title:z.string(),
            description:z.string()
        })
    ),
    price:z.int(),
    category:z.string(),
    tags:z.string().array(),
    lessons:z.array(),
    batches:z.array(
        z.object({
            name:z.string(),
            startDate:z.date(),
            endDate:z.date()
        })
    )
}) 


