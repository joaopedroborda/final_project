import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { makeDeleteStudents } from '@/domain/students/delete-students/delete-students.make'

export const DeleteStudentRoute = (app: FastifyTypedInstance) => {
    app.route({
        url: '/:id',
        method: 'DELETE',
        schema: {
            operationId: 'DeleteStudent',
            summary: 'Delete a student',
            tags: ['student'],
            params: z.object({
                id: z.string()
            }),
            response: {
                204: z.object({ message: z.string() })
            }
        },
        async handler(request, reply) {
            const { id } = request.params
            
            const usecase = makeDeleteStudents()
            const result = await usecase.execute({ id })

            if (result.isLeft()) {
                return result.throw()
            }

            reply.send({ message: 'Student deleted successfully' })
        }
    })
}
