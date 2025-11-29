
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { RoomBookingsRepository } from '@/repositories/interfaces/rooms-booking-repository'
import { ReadRoomsBookingSchema } from './read-room-booking.schema'
import { RoomBooking } from '../room-booking-model'

type ReadRoomResult = Either<
ZodCustomError,
RoomBooking
>

export class ReadRoomsBookingUsecase {
    constructor (
        private readonly roombookingRepository: RoomBookingsRepository
    ){}

    async execute(payload: JSONObject):  Promise<ReadRoomResult> {
        const parse =  ReadRoomsBookingSchema.safeParse(payload)
            
        if(parse.error){
            return left(
                new ZodCustomError(parse.error)
            )
        }
        const data = parse.data

        const roombookingData = await this.roombookingRepository.find(data.id)

        if(!roombookingData){
            return left(
                new NotFoundError(
                    'Usuario Não encontrado',
                    'Nenhum usuario com o id informado foi encontrado',
                    'booking_not_found'
                )
            )
        }
        return right(roombookingData)
    }
}
    