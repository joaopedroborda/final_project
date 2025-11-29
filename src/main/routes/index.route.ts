import { FastifyTypedInstance } from "../app";
import { CreateRoomRoute } from "./rooms-routes/create-room.route";
import { ListRoomRoute } from "./rooms-routes/list-room.route";
import { ReadRoomRoute } from "./rooms-routes/read-room.route";
import { StudentsRoute } from "./students-routes/index.route";

export const IndexRoute = (app: FastifyTypedInstance) => {
     app.register(StudentsRoute, {prefix: '/students'})
     app.register(CreateRoomRoute, {prefix: '/rooms'})
     app.register(ListRoomRoute, {prefix: '/rooms'})
     app.register(ReadRoomRoute, {prefix: '/rooms'})
}