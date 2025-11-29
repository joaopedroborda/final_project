import { FastifyTypedInstance } from "../app";
import { RoomsRoute } from "./rooms-routes/index.route";
import { StudentsRoute } from "./students-routes/index.route";

export const IndexRoute = (app: FastifyTypedInstance) => {
     app.register(StudentsRoute, {prefix: '/students'})
     app.register(RoomsRoute, {prefix: '/rooms'})
}