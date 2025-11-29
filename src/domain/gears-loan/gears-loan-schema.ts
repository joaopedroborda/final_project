import { z } from 'zod'


export const GearsLoanSchema = z.object({
    id: z.string(),
    gears_id: z.string(),
    student_id: z.string(),
    start_time: z.date(),
    end_time: z.date(),
    
})

export type GearsLoanSchema = z.infer<typeof GearsLoanSchema>