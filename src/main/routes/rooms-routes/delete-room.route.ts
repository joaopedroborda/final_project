import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { makeDeleteRooms } from '@/domain/rooms/delete-rooms/delete-rooms.make'

export const DeleteRoomRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/:id',
        method: 'DELETE',
        schema: {
            operationId: 'DeleteRoom',
            summary: 'Delete a room',
            tags: ['room'],
            params: z.object({
                id: z.string()
            }),
            response: {
                200: z.object({ message: z.string() })
            }
        },
        async handler(request, reply) {
            const { id } = request.params
            
            const usecase = makeDeleteRooms()
            const result = await usecase.execute({ id })

            if (result.isLeft()) {
                return result.throw()
            }

            reply.send({ message: 'Room deleted successfully' })
        }
    })
}
