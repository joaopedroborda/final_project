

import { NotFoundError } from '@/core/errors/custom/client-error/notfound-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
//import { UserRepository } from '@/repositor/interface/user-repository'

//import { ReadUserSchema } from './read-users-schema'



export class ReadStudentUseCase {
	constructor (
		private readonly studentsRepository: StudentRepository
	){}

	async execute(payload: JSONObject){
		const parse =  ReadStudentSchema.safeParse(payload)
			
		if(parse.error){
			return left(
				new ZodCustomError(parse.error)
			)
		}
		const date = parse.data

		const userDate = await this.studentsRepository.find(date.id)

		if(!userDate){
			return left(
				new NotFoundError(
					'Usuario Não encontrado',
					'Nenhum usuario com o id informado foi encontrado',
					'user_not_found'
				)
			)
		}
		return right(userDate)
	}
}
	