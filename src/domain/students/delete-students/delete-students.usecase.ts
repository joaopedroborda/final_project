import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { StudentsRepository } from '@/repositories/interfaces/students-repository'
import { DeleteStudentSchema } from './delete-students.schema'

type DeleteStudentResult = Either<
  ZodCustomError | NotFoundError,
  undefined
>

export class DeleteStudentUsecase {
  constructor(
    private readonly studentsRepository: StudentsRepository
  ) { }

  async execute(payload: { id: string }): Promise<DeleteStudentResult> { // <- aqui, objeto com id
    const parse = DeleteStudentSchema.safeParse(payload)

    if (parse.error) {
      return left(new ZodCustomError(parse.error))
    }

    const { id } = parse.data

    const student = await this.studentsRepository.find(id)

    if (!student) {
      return left(
        new NotFoundError(
          'Usuário não encontrado',
          'Nenhum usuário com este identificador foi encontrado',
          'student_not_found'
        )
      )
    }

    await this.studentsRepository.delete(id)
    return right(undefined)
  }
}
