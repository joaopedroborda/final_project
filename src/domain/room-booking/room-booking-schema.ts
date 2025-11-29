import { z } from 'zod'


export const RoomBookingSchema = z.object({
    id: z.string(),
    room_id: z.string(),
    student_id: z.string(),
    start_time: z.string(),
    end_time: z.string(),
    isBooked: z.boolean().optional()
})

export type RoomBookingSchema = z.infer<typeof RoomBookingSchema>