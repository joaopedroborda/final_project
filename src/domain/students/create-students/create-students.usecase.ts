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
			return left(
				new ZodCustomError(parse.error)
			)
		}

		const data = parse.data

		const studentData: Student = {
			... data,
			id: randomUUID(),
		}

		await this.StudentsRepository.create(studentData)

		return right(studentData)
	}
}