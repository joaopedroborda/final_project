import { makeListGear } from "@/domain/gears/list-gears/list-gears.make"
import { GearsSchema } from "@/domain/gears/gears-schema"
import { FastifyTypedInstance } from "@/main/app"
import z from "zod"

export const ListGearRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/',
        method: 'GET',
        schema: {
            operationId: 'ListGears',
            summary: 'List all gears',
            tags: ['gear'],
            response: {
                200: z.array(GearsSchema)
            }
        },
        handler: async (_, reply) => {
            const usecase = makeListGear()
            const gears = await usecase.execute()
            reply.send(gears)
        }
    })
}
