import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { makeCreateRoomBooking } from '@/domain/room-booking/create-room-booking/create-room-booking.make'
import { is } from 'zod/v4/locales'

export const CreateRoomBookingRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/',
        method: 'POST',
        schema: {
            operationId: 'CreateRoomBooking',
            summary: 'Create a new booking',
            tags: ['roombooking'],
            body: z.object({
                room_id: z.string(),
                    student_id: z.string(),
                    start_time: z.string(),
                    end_time: z.string(),
            }),
            response: {
                200: z.object({
                    room_id: z.string(),
                        student_id: z.string(),
                        start_time: z.string(),
                        end_time: z.string(),
                }),
            }
        },
        async handler(request, reply) {
            const { body } = request

            const usecase = makeCreateRoomBooking()
            const roomBooking = await usecase.execute(body)

            if (roomBooking.isLeft()) {
                return roomBooking.throw()
            }
            reply.send(roomBooking.value)
        }
    })
}