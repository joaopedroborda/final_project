
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { GearsRepository } from '@/repositories/interfaces/gears-repository'
import { ReadGearsSchema } from './read-gears.schema'
import { Gear } from '../gears-model'

type ReadGearResult = Either<
ZodCustomError,
Gear
>

export class ReadGearsUsecase {
	constructor (
		private readonly gearsRepository: GearsRepository
	){}

	async execute(payload: JSONObject):  Promise<ReadGearResult> {
		const parse =  ReadGearsSchema.safeParse(payload)
			
		if(parse.error){
			return left(
				new ZodCustomError(parse.error)
			)
		}
		const data = parse.data

		const gearsData = await this.gearsRepository.find(data.id)

		if(!gearsData){
			return left(
				new NotFoundError(
					'Usuario Não encontrado',
					'Nenhum usuario com o id informado foi encontrado',
					'gears_not_found'
				)
			)
		}
		return right(gearsData)
	}
}
	