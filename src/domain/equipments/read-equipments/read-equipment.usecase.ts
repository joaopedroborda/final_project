import { NotFoundError } from '@/core/errors/custom/client-error/notfound-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
import { ReadEquipmentsSchema } from './read-equipment.schema'
//import { UserRepository } from '@/repositor/interface/user-repository'


export class ReadEquipmentUseCase {
	constructor (
		private readonly equipmentsRepository: EquipmentsRepository
	){}

	async execute(payload: JSONObject){
		const parse =  ReadEquipmentsSchema.safeParse(payload)
			
		if(parse.error){
			return left(
				new ZodCustomError(parse.error)
			)
		}
		const data = parse.data

		const equipmentData = await this.equipmentsRepository.find(data.id)

		if(!equipmentData){
			return left(
				new NotFoundError(
					'Equipamento Não encontrado',
					'Nenhum equipamento com o id informado foi encontrado',
					'equipamento_not_found'
				)
			)
		}
		return right(equipmentData)
	}
}
	