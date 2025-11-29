import { FastifyTypedInstance } from "../app";
import { CreateStudentRoute } from "./students-routes/create-student.route";
import { ReadStudentRoute } from "./students-routes/read-student.route";

export const IndexRoute = (app: FastifyTypedInstance) => {
     app.register(CreateStudentRoute, {prefix: '/students'})
     app.register(ReadStudentRoute, {prefix: '/students'})
}