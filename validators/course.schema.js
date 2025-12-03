import z from "zod";

export const courseSchem=z.object({
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
    lessons:z.string(),
    batches:z.array(
        z.object({
            name:z.string(),
            startDate:z.date(),
            endDate:z.date()
        })
    )
}) 


