import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { GearsSchema } from '@/domain/gears/gears-schema'
import { makeCreateGear } from '@/domain/gears/create-gears/create-gears.make'

export const CreateGearRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/',
        method: 'POST',
        schema: {
            operationId: 'CreateGear',
            summary: 'Create a new gear',
            tags: ['gear'],
            body: z.object({
                name: z.string(),
            }),
            response: {
                200: GearsSchema
            }
        },
        async handler(request, reply) {
            const { body } = request

            const usecase = makeCreateGear()
            const gear = await usecase.execute(body)

            if(gear.isLeft()) {
                return gear.throw()
            }
            reply.send(gear.value)
        }
    })
}