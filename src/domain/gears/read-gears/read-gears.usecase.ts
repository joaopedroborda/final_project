import { NotFoundError } from '@/core/errors/custom/client-error/notfound-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
import { ReadGearsSchema } from './read-gears.schema'
//import { GearsRepository } from '@/repositor/interface/gears-repository'


export class ReadGearsUseCase {
	constructor (
		private readonly gearsRepository: GearsRepository

	async execute(payload: JSONObject){
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
					'Equipamento Não encontrado',
					'Nenhum equipamento com o id informado foi encontrado',
					'equipamento_not_found'
				)
			)
		}
		return right(gearsData)
	}
}
	