
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { RoomsRepository } from '@/repositories/interfaces/rooms-repository'
import { ReadRoomsSchema } from './read-rooms.schema'
import { Room } from '../rooms-model'

type ReadRoomResult = Either<
ZodCustomError,
Room
>

export class ReadRoomsUsecase {
	constructor (
		private readonly roomsRepository: RoomsRepository
	){}

	async execute(payload: JSONObject):  Promise<ReadRoomResult> {
		const parse =  ReadRoomsSchema.safeParse(payload)
			
		if(parse.error){
			return left(
				new ZodCustomError(parse.error)
			)
		}
		const data = parse.data

		const roomsData = await this.roomsRepository.find(data.id)

		if(!roomsData){
			return left(
				new NotFoundError(
					'Usuario Não encontrado',
					'Nenhum usuario com o id informado foi encontrado',
					'rooms_not_found'
				)
			)
		}
		return right(roomsData)
	}
}
	