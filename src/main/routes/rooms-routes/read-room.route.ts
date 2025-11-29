import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { RoomSchema } from '@/domain/rooms/rooms-schema'
import { makeReadRoom } from '@/domain/rooms/read-rooms/read-rooms.make'

export const ReadRoomRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/:id',
        method: 'GET',
        schema: {
            operationId: 'ReadRoom',
            summary: 'Read Room by ID',
            tags: ['room'],
            params: z.object({
                id: z.string()
            }),
            response: {
                200: RoomSchema
            }
        },
        async handler(request, reply) {
            const { id } = request.params
            console.log('Reading Room: ', id)
            const usecase = makeReadRoom()
            const room = await usecase.execute({id})

            if(room.isLeft()) {
                return room.throw()
            }
            reply.send(room.value)
        }
    })
}