import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { GearsLoanRepository } from '@/repositories/interfaces/gears-loan-repository'
import { DeleteGearsLoanSchema } from './finish-gears-loan.schema'

type DeleteGearsLoanResult = Either<
  ZodCustomError | NotFoundError,
  undefined
>

export class DeleteGearsLoanUsecase {
  constructor(
    private readonly gearsloansRepository: GearsLoanRepository
  ) { }

  async execute(payload: { id: string }): Promise<DeleteGearsLoanResult> { // <- aqui, objeto com id
    const parse = DeleteGearsLoanSchema.safeParse(payload)

    if (parse.error) {
      return left(new ZodCustomError(parse.error))
    }

    const { id } = parse.data

    const gearsloan = await this.gearsloansRepository.find(id)

    if (!gearsloan) {
      return left(
        new NotFoundError(
          'Usuário não encontrado',
          'Nenhum usuário com este identificador foi encontrado',
          'student_not_found'
        )
      )
    }

    await this.gearsloansRepository.delete(id)
    return right(undefined)
  }
}
