import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { StudentSchema } from '@/domain/students/students-schema'
import { makeReadStudent } from '@/domain/students/read-students/read-students.make'

export const ReadStudentRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/:id',
        method: 'GET',
        schema: {
            operationId: 'ReadStudent',
            summary: 'Read Student by ID',
            tags: ['student'],
            params: z.object({
                id: z.string()
            }),
            response: {
                200: StudentSchema
            }
        },
        async handler(request, reply) {
            const { id } = request.params
            console.log('Reading Student: ', id)
            const usecase = makeReadStudent()
            const student = await usecase.execute({id})

            if(student.isLeft()) {
                return student.throw()
            }
            reply.send(student.value)
        }
    })
}