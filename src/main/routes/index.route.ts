import { FastifyTypedInstance } from "../app";
import { GearsRoute } from "./gears-routes/index.route";
import { RoomsRoute } from "./rooms-routes/index.route";
import { StudentsRoute } from "./students-routes/index.route";

export const IndexRoute = (app: FastifyTypedInstance) => {
     app.register(StudentsRoute, {prefix: '/students'})
     app.register(RoomsRoute, {prefix: '/rooms'})
     app.register(GearsRoute, {prefix: '/gears'})
}