import { makeListStudent } from "@/domain/students/list-students/list-students.make"
import { StudentSchema } from "@/domain/students/students-schema"
import { FastifyTypedInstance } from "@/main/app"
import z from "zod"

export const ListStudentRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/',
        method: 'GET',
        schema: {
            operationId: 'ListStudents',
            summary: 'List all students',
            tags: ['student'],
            response: {
                200: z.array(StudentSchema)
            }
        },
        handler: async (_, reply) => {
            const usecase = makeListStudent()
            const students = await usecase.execute()
            reply.send(students)
        }
    })
}
