import { randomUUID } from 'crypto'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
//import { UserRepository } from '@/repositor/interface/user-repository'

import { CreateStudentSchema } from './create-students.schema'
import { Student } from '../students-models'

export class CreateStudentUseCase {
	constructor(
		private readonly studentsRepository: //StudentRepository
	){}

	async execute(payload: JSONObject){
		const parse = CreateStudentSchema.safeParse(payload)
		
		if(parse.error){
			return left(
				new ZodCustomError(parse.error)
			)
		}
		const data = parse.data

		const userDate: Student = {
			...data,
			id: randomUUID(),
		}
		await this.studentsRepository.create(userDate)

		return right(userDate)
	}
}