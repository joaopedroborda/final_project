
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { GearsRepository } from '@/repositories/interfaces/gears-repository'
import { UpdateGearSchema } from './update-gears.schema'
import { Gear } from '../gears-model'

type UpdateGearResult = Either<
ZodCustomError | NotFoundError,
Gear
>

export class UpdateGearUsecase {
  constructor(private readonly gearsRepository: GearsRepository) {}

  async execute(payload: unknown): Promise<UpdateGearResult> {
    const parse = UpdateGearSchema.safeParse(payload)

    if (parse.error) {
      return left(new ZodCustomError(parse.error))
    }

    const data = parse.data
    const gearExam = await this.gearsRepository.find(data.id)

    if (!gearExam) {
      return left(
        new NotFoundError(
          'Usuário Não encontrado',
          'Nenhum usuário foi encontrado!',
          'gear_not_found'
        )
      )
    }

    const { id, ...updateFields } = data
    const updatedGear = await this.gearsRepository.update(id, updateFields)

    return right(updatedGear)
  }
}
