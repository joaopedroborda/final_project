import { z } from 'zod'


export const RoomBookingSchema = z.object({
    id: z.string(),
    gears_id: z.string(),
    student_id: z.string(),
    pickup_date: z.date(),
    return_date: z.null(),
    returned: z.boolean(),
    
})

export type RoomBookingSchema = z.infer<typeof RoomBookingSchema>