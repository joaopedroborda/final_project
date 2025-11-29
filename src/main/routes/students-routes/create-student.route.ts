import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { makeCreateStudent } from '@/domain/students/create-students/create-students.make'

export const CreateStudentRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/',
        method: 'POST',
        schema: {
            operationId: 'CreateStudent',
            summary: 'Create a new student',
            tags: ['student'],
            body: z.object({
                name: z.string(),
                age: z.string(),
                email: z.email()
            }),
            response: {
                200: z.object({
                    name: z.string(),
                    age: z.string(),
                    email: z.email()
                })
            }
        },
        async handler(request, reply) {
            const { body } = request

            const usecase = makeCreateStudent()
            const student = await usecase.execute(body)

            if (student.isLeft()) {
                return student.throw()
            }
            reply.send(student.value)
        }
    })
}