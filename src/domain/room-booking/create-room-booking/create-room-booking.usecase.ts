import { randomUUID } from 'node:crypto'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { RoomBookingsRepository } from '@/repositories/interfaces/rooms-booking-repository'
import { RoomBooking } from '../room-booking-model'
import { CreateRoomBookingSchema } from './create-room-booking.schema'
import { RoomsRepository } from '@/repositories/interfaces/rooms-repository'
import { StudentsRepository } from '@/repositories/interfaces/students-repository'
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { BadRequestError } from '@/core/errors/custom/client-error/bad-request-error'

type CreateRoomBookingResult = Either<
    ZodCustomError,
    RoomBooking
>
export class CreateRoomBookingUsecase {
    constructor(
        private readonly RoomBookingsRepository: RoomBookingsRepository,
        private readonly roomsRepository: RoomsRepository,
        private readonly studentsRepository: StudentsRepository
    ) { }

    async execute(payload: JSONObject): Promise<CreateRoomBookingResult> {
        const parse = CreateRoomBookingSchema.safeParse(payload)

        if (parse.error) {
            return left(
                new ZodCustomError(parse.error)
            )
        }

        const data = parse.data

        const startTime = new Date(data.start_time)
        const endTime = new Date(data.end_time)

        const roomExists = await this.roomsRepository.find(data.room_id)

        const studentExists = await this.studentsRepository.find(data.student_id)

        if (endTime <= startTime) {
            return left(
                new BadRequestError('End time must be after start time.')
            )
        }

        if (!studentExists) {
            return left(
                new NotFoundError('This student does not exist.')
            )
        }

        if (!roomExists) {
            return left(
                new NotFoundError('The room listed does not exist.')
            )
        }

        const existingBookings = await this.RoomBookingsRepository.findByRoom(data.room_id)

        const isConflict = existingBookings.some((b: RoomBooking) =>
            b.isBooked &&
            startTime <= new Date(b.end_time) &&
            endTime >= new Date(b.start_time)
        )

        if (isConflict) {
            return left(new BadRequestError('Room is already booked for this time slot'))
        }

        const roomBookingData: RoomBooking = {
            ...data,
            id: randomUUID(),
            start_time: startTime.toISOString(),
            end_time: endTime.toISOString(),
            isBooked: true
        }


        await this.RoomBookingsRepository.create(roomBookingData)

        return right(roomBookingData)
    }
}