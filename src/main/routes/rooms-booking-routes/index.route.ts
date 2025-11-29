import { FastifyTypedInstance } from "@/main/app"
import { CreateRoomBookingRoute } from "./create-room-booking.route"
//import { ListRoomBookingRoute } from "./list-room-booking.route"
//import { ReadRoomBookingRoute } from "./read-room.route"
//import { UpdateRoomBookingRoute } from "./update-room.route"
//import { DeleteRoomBookingRoute } from "./delete-room.route"

export const RoomBookingsRoute = (app: FastifyTypedInstance) => {
     app.register(CreateRoomBookingRoute)
     //app.register(ListRoomBookingRoute)
     //app.register(ReadRoomBookingRoute)
     //app.register(UpdateRoomBookingRoute)
     //app.register(DeleteRoomBookingRoute)
}