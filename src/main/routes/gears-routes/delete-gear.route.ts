import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { makeDeleteGears } from '@/domain/gears/delete-gears/delete-gears.make'

export const DeleteGearRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/:id',
        method: 'DELETE',
        schema: {
            operationId: 'DeleteGear',
            summary: 'Delete a gear',
            tags: ['gear'],
            params: z.object({
                id: z.string()
            }),
            response: {
                200: z.object({ message: z.string() })
            }
        },
        async handler(request, reply) {
            const { id } = request.params
            
            const usecase = makeDeleteGears()
            const result = await usecase.execute({ id })

            if (result.isLeft()) {
                return result.throw()
            }

            reply.send({ message: 'Gear deleted successfully' })
        }
    })
}
