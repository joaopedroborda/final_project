import { FastifyTypedInstance } from "../app";
import { GearsRoute } from "./gears-routes/index.route";
import { RoomBookingsRoute } from "./rooms-booking-routes/index.route";
import { RoomsRoute } from "./rooms-routes/index.route";
import { StudentsRoute } from "./students-routes/index.route";

export const IndexRoute = (app: FastifyTypedInstance) => {
     app.register(StudentsRoute, {prefix: '/students'})
     app.register(RoomsRoute, {prefix: '/rooms'})
     app.register(GearsRoute, {prefix: '/gears'})
     app.register(RoomBookingsRoute, {prefix: '/bookings'})
}