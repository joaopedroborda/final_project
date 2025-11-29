import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { GearsLoanSchema } from '@/domain/gears-loan/gears-loan-schema'
import { makeCreateGear } from '@/domain/gears/create-gears/create-gears.make'

export const CreateGearLoanRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/',
        method: 'POST',
        schema: {
            operationId: 'CreateGearLoan',
            summary: 'Create a new gear loan',
            tags: ['gear'],
            body: z.object({
                name: z.string(),
            }),
            response: {
                200: z.object({
                    name: z.string(),
                }),
            }
        },
        async handler(request, reply) {
            const { body } = request

            const usecase = makeCreateGear()
            const gear = await usecase.execute(body)

            if (gear.isLeft()) {
                return gear.throw()
            }
            reply.send(gear.value)
        }
    })
}