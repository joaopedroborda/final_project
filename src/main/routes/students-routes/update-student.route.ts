import z from 'zod'
import { FastifyTypedInstance } from '../../app'
import { StudentSchema } from '@/domain/students/students-schema'
import { makeUpdateStudent } from '@/domain/students/update-students/update-students.make'

export const UpdateStudentRoute = (app: FastifyTypedInstance) => {
  app.route({
    url: '/:id',
    method: 'PATCH',
    schema: {
      operationId: 'UpdateStudent',
      summary: 'Update a student',
      tags: ['student'],
      params: z.object({
        id: z.string()
      }),
      body: z.object({
        name: z.string().optional(),
        age: z.string().optional(),
        email: z.string().optional()
      }),
      response: {
        200: StudentSchema
      }
    },
    async handler(request, reply) {
      const { body, params } = request

      const payload = { id: params.id, ...body }

      const usecase = makeUpdateStudent()
      const student = await usecase.execute(payload)

      if (student.isLeft()) {
        return student.throw()
      }

      reply.send(student.value)
    }
  })
}
