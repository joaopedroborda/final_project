
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { StudentsRepository } from '@/repositories/interfaces/students-repository'
import { UpdateStudentSchema } from './update-students.schema'
import { Student } from '../students-model'

type UpdateStudentResult = Either<
ZodCustomError | NotFoundError,
Student
>

export class UpdateStudentUsecase {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  async execute(payload: unknown): Promise<UpdateStudentResult> {
    const parse = UpdateStudentSchema.safeParse(payload)

    if (parse.error) {
      return left(new ZodCustomError(parse.error))
    }

    const data = parse.data
    const studentExam = await this.studentsRepository.find(data.id)

    if (!studentExam) {
      return left(
        new NotFoundError(
          'Usuário Não encontrado',
          'Nenhum usuário foi encontrado!',
          'student_not_found'
        )
      )
    }

    const { id, ...updateFields } = data
    const updatedStudent = await this.studentsRepository.update(id, updateFields)

    return right(updatedStudent)
  }
}
