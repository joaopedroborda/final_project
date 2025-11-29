import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { GearsRepository } from '@/repositories/interfaces/gears-repository'
import { DeleteGearSchema } from './delete-gears.schema'

type DeleteGearResult = Either<
  ZodCustomError | NotFoundError,
  undefined
>

export class DeleteGearUsecase {
  constructor(
    private readonly gearsRepository: GearsRepository
  ) { }

  async execute(payload: { id: string }): Promise<DeleteGearResult> { // <- aqui, objeto com id
    const parse = DeleteGearSchema.safeParse(payload)

    if (parse.error) {
      return left(new ZodCustomError(parse.error))
    }

    const { id } = parse.data

    const gear = await this.gearsRepository.find(id)

    if (!gear) {
      return left(
        new NotFoundError(
          'Usuário não encontrado',
          'Nenhum usuário com este identificador foi encontrado',
          'gear_not_found'
        )
      )
    }

    await this.gearsRepository.delete(id)
    return right(undefined)
  }
}
