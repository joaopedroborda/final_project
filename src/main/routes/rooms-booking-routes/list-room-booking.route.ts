import { makeListRoom } from "@/domain/rooms/list-rooms/list-rooms.make"
import { RoomSchema } from "@/domain/rooms/rooms-schema"
import { FastifyTypedInstance } from "@/main/app"
import z from "zod"

export const ListRoomRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/',
        method: 'GET',
        schema: {
            operationId: 'ListRooms',
            summary: 'List all rooms',
            tags: ['room'],
            response: {
                200: z.array(RoomSchema)
            }
        },
        handler: async (_, reply) => {
            const usecase = makeListRoom()
            const rooms = await usecase.execute()
            reply.send(rooms)
        }
    })
}
