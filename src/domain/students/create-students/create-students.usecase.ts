<<<<<<< HEAD
import { randomUUID } from 'node:crypto'

import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right } from '@/core/errors/either'
import { StudentsRepository } from '@/repositories/interfaces/students-repository'

import { Student } from '../students-model'
import { CreateStudentSchema } from './create-students.schema'

export class CreateStudentUsecase {
	constructor(
		private readonly StudentsRepository: StudentsRepository
	) { }

	async execute(payload: JSONObject) {
		const parse = CreateStudentSchema.safeParse(payload)

		if(parse.error) {
=======
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
>>>>>>> 6168fce2a95b413142af33dfd3d149efe2c85e7f
			return left(
				new ZodCustomError(parse.error)
			)
		}
<<<<<<< HEAD

		const data = parse.data

		const studentData: Student = {
			... data,
			id: randomUUID(),
		}

		await this.StudentsRepository.create(studentData)

		return right(studentData)
=======
		const data = parse.data

		const userDate: Student = {
			...data,
			id: randomUUID(),
		}
		await this.studentsRepository.create(userDate)

		return right(userDate)
>>>>>>> 6168fce2a95b413142af33dfd3d149efe2c85e7f
	}
}