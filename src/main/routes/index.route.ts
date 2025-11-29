import { FastifyTypedInstance } from "../app";
import { CreateRoomRoute } from "./rooms-routes/create-room.route";
import { ListRoomRoute } from "./rooms-routes/list-room.route";
import { ReadRoomRoute } from "./rooms-routes/read-room.route";
import { CreateStudentRoute } from "./students-routes/create-student.route";
import { ListStudentRoute } from "./students-routes/list-students.route";
import { ReadStudentRoute } from "./students-routes/read-student.route";

export const IndexRoute = (app: FastifyTypedInstance) => {
     app.register(CreateStudentRoute, {prefix: '/students'})
     app.register(ListStudentRoute, {prefix: '/students'})
     app.register(ReadStudentRoute, {prefix: '/students'})
     app.register(CreateRoomRoute, {prefix: '/rooms'})
     app.register(ListRoomRoute, {prefix: '/rooms'})
     app.register(ReadRoomRoute, {prefix: '/rooms'})
}