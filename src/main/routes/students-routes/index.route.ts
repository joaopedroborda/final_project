import { FastifyTypedInstance } from "../../app";
import { CreateStudentRoute } from "./create-student.route";
import { ReadStudentRoute } from "./read-student.route";

export const IndexRoute = (app: FastifyTypedInstance) => {
     app.register(CreateStudentRoute, {prefix: '/students'})
     app.register(ReadStudentRoute, {prefix: '/students'})
}