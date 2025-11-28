
import { NotFoundError } from '@/core/errors/custom/client-error/notfound-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
//import { UserRepository } from '@/repositor/interface/user-repository'


import { UpdateStudentSchema } from './update-alunos.schema'
import { Student } from '../alunos-models'

export class UpdateStudentUseCase{
	constructor(
		private readonly studentsRepository: StudentRepository
	){}

	async execute(payload: JSONObject){
		const parse = UpdateStudentSchema.safeParse(payload)
		
		if(parse.error){
			return left(
				new ZodCustomError(parse.error)
			)
		}
		const data = parse.data

		const studentExame = await this.studentsRepository.find(data.id)

		if(!studentExame){
			return left(
				new NotFoundError(
					'Usuario Não encontrado',
					'Nenhum usuario foi encontrado!',
					'user_not_found'
				)
			)
		}

		const userData: Partial<Student> = {
			...data,
		}
		await this.studentsRepository.update(userData)


		return right(userData)
	}
}