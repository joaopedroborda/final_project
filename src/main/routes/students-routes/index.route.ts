import { FastifyTypedInstance } from "@/main/app"
import { CreateStudentRoute } from "./create-student.route"
import { ListStudentRoute } from "./list-students.route"
import { ReadStudentRoute } from "./read-student.route"
import { UpdateStudentRoute } from "./update-student.route"
import { DeleteStudentRoute } from "./delete-student.route"

export const StudentsRoute = (app: FastifyTypedInstance) => {
     app.register(CreateStudentRoute)
     app.register(ListStudentRoute)
     app.register(ReadStudentRoute)
     app.register(UpdateStudentRoute)
     app.register(DeleteStudentRoute)
}