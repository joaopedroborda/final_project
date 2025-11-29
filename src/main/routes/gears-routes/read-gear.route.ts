import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { GearSchema } from '@/domain/gears/gears-schema'
import { makeReadGear } from '@/domain/gears/read-gears/read-gears.make'

export const ReadGearRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/:id',
        method: 'GET',
        schema: {
            operationId: 'ReadGear',
            summary: 'Read Gear by ID',
            tags: ['gear'],
            params: z.object({
                id: z.string()
            }),
            response: {
                200: GearSchema
            }
        },
        async handler(request, reply) {
            const { id } = request.params
            console.log('Reading User: ', id)
            const usecase = makeReadGear()
            const gear = await usecase.execute({id})

            if(gear.isLeft()) {
                return gear.throw()
            }
            reply.send(gear.value)
        }
    })
}