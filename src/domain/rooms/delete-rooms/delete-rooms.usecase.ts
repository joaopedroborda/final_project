import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { RoomsRepository } from '@/repositories/interfaces/rooms-repository'
import { DeleteRoomSchema } from './delete-rooms.schema'

type DeleteRoomResult = Either<
  ZodCustomError | NotFoundError,
  undefined
>

export class DeleteRoomUsecase {
  constructor(
    private readonly roomsRepository: RoomsRepository
  ) { }

  async execute(payload: { id: string }): Promise<DeleteRoomResult> { // <- aqui, objeto com id
    const parse = DeleteRoomSchema.safeParse(payload)

    if (parse.error) {
      return left(new ZodCustomError(parse.error))
    }

    const { id } = parse.data

    const room = await this.roomsRepository.find(id)

    if (!room) {
      return left(
        new NotFoundError(
          'Usuário não encontrado',
          'Nenhum usuário com este identificador foi encontrado',
          'room_not_found'
        )
      )
    }

    await this.roomsRepository.delete(id)
    return right(undefined)
  }
}
