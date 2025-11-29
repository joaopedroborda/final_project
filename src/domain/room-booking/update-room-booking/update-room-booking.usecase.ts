
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { RoomBookingsRepository } from '@/repositories/interfaces/rooms-booking-repository'
import { UpdateRoomBookingSchema } from './update-room-booking.schema'
import { RoomBooking } from '../room-booking-model'

type UpdateRoomResult = Either<
ZodCustomError | NotFoundError,
RoomBooking
>

export class UpdateRoomBookingUsecase {
  constructor(private readonly roomsBookingsRepository: RoomBookingsRepository) {}

  async execute(payload: unknown): Promise<UpdateRoomResult> {
    const parse = UpdateRoomBookingSchema.safeParse(payload)

    if (parse.error) {
      return left(new ZodCustomError(parse.error))
    }

    const data = parse.data
    const roomExam = await this.roomsBookingsRepository.find(data.id)

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
    const updatedRoomBooking = await this.roomsBookingsRepository.update(id, updateFields)

    return right(updatedRoomBooking)
  }
}
