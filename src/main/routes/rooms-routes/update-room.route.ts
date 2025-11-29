import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { RoomSchema } from '@/domain/rooms/rooms-schema'
import { makeUpdateRoom } from '@/domain/rooms/update-rooms/update-rooms.make'

export const UpdateRoomRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/:id',
        method: 'PATCH',
        schema: {
            operationId: 'UpdateRoom',
            summary: 'Update a room',
            tags: ['room'],
            params: z.object({
                id: z.string()
            }),
            body: z.object({
                name: z.string().optional(),
                capacity: z.string().optional(),
                description: z.string().optional(),
            }),
            response: {
                200: RoomSchema
            }
        },
        async handler(request, reply) {
            const { body, params } = request

            const payload = { id: params.id, ...body }

            const usecase = makeUpdateRoom()
            const room = await usecase.execute(payload)

            if (room.isLeft()) {
                return room.throw()
            }

            reply.send(room.value)
        }
    })
}
