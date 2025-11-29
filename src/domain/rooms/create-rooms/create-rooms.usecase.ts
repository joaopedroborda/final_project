import { randomUUID } from 'node:crypto'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { RoomsRepository } from '@/repositories/interfaces/rooms-repository'
import { Room } from '../rooms-model'
import { CreateRoomSchema } from './create-rooms.schema'

type CreateRoomResult = Either<
ZodCustomError,
Room
>
export class CreateRoomUsecase {
	constructor(
		private readonly RoomsRepository: RoomsRepository
	) { }

	async execute(payload: JSONObject): Promise<CreateRoomResult> {
		const parse = CreateRoomSchema.safeParse(payload)

		if(parse.error) {
			return left(
				new ZodCustomError(parse.error)
			)
		}

		const data = parse.data

		const roomData: Room = {
			... data,
			id: randomUUID(),
		}

		await this.RoomsRepository.create(roomData)

		return right(roomData)
	}
}