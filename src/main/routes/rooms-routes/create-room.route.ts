import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { makeCreateRoom } from '@/domain/rooms/create-rooms/create-rooms.make'

export const CreateRoomRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/',
        method: 'POST',
        schema: {
            operationId: 'CreateRoom',
            summary: 'Create a new room',
            tags: ['room'],
            body: z.object({
                name: z.string(),
                capacity: z.string(),
                description: z.string(),
            }),
            response: {
                200: z.object({
                    name: z.string(),
                    capacity: z.string(),
                    description: z.string(),
                }),
            }
        },
        async handler(request, reply) {
            const { body } = request

            const usecase = makeCreateRoom()
            const room = await usecase.execute(body)

            if (room.isLeft()) {
                return room.throw()
            }
            reply.send(room.value)
        }
    })
}