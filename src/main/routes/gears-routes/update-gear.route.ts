import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { GearsSchema } from '@/domain/gears/gears-schema'
import { makeUpdateGear } from '@/domain/gears/update-gears/update-gears.make'

export const UpdateGearRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/:id',
        method: 'PATCH',
        schema: {
            operationId: 'UpdateGear',
            summary: 'Update a gear',
            tags: ['gear'],
            params: z.object({
                id: z.string()
            }),
            body: z.object({
                name: z.string().optional()
            }),
            response: {
                200: GearsSchema
            }
        },
        async handler(request, reply) {
            const { body, params } = request

            const payload = { id: params.id, ...body }

            const usecase = makeUpdateGear()
            const gear = await usecase.execute(payload)

            if (gear.isLeft()) {
                return gear.throw()
            }

            reply.send(gear.value)
        }
    })
}
