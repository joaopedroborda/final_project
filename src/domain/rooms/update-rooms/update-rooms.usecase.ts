
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { RoomsRepository } from '@/repositories/interfaces/rooms-repository'
import { UpdateRoomSchema } from './update-rooms.schema'
import { Room } from '../rooms-model'

type UpdateRoomResult = Either<
ZodCustomError | NotFoundError,
Room
>

export class UpdateRoomUsecase {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async execute(payload: unknown): Promise<UpdateRoomResult> {
    const parse = UpdateRoomSchema.safeParse(payload)

    if (parse.error) {
      return left(new ZodCustomError(parse.error))
    }

    const data = parse.data
    const roomExam = await this.roomsRepository.find(data.id)

    if (!roomExam) {
      return left(
        new NotFoundError(
          'Usuário Não encontrado',
          'Nenhum usuário foi encontrado!',
          'room_not_found'
        )
      )
    }

    const { id, ...updateFields } = data
    const updatedRoom = await this.roomsRepository.update(id, updateFields)

    return right(updatedRoom)
  }
}
