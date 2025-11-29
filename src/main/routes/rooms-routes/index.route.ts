import { FastifyTypedInstance } from "@/main/app"
import { CreateRoomRoute } from "./create-room.route"
import { ListRoomRoute } from "./list-room.route"
import { ReadRoomRoute } from "./read-room.route"
import { UpdateRoomRoute } from "./update-room.route"
import { DeleteRoomRoute } from "./delete-room.route"

export const RoomsRoute = (app: FastifyTypedInstance) => {
     app.register(CreateRoomRoute)
     app.register(ListRoomRoute)
     app.register(ReadRoomRoute)
     app.register(UpdateRoomRoute)
     app.register(DeleteRoomRoute)
}