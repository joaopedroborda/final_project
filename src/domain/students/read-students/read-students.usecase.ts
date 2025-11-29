
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { StudentsRepository } from '@/repositories/interfaces/students-repository'
import { ReadStudentsSchema } from './read-students.schema'
import { Student } from '../students-model'

type ReadStudentResult = Either<
ZodCustomError,
Student
>

export class ReadStudentsUsecase {
	constructor (
		private readonly studentsRepository: StudentsRepository
	){}

	async execute(payload: JSONObject):  Promise<ReadStudentResult> {
		const parse =  ReadStudentsSchema.safeParse(payload)
			
		if(parse.error){
			return left(
				new ZodCustomError(parse.error)
			)
		}
		const data = parse.data

		const studentsData = await this.studentsRepository.find(data.id)

		if(!studentsData){
			return left(
				new NotFoundError(
					'Usuario Não encontrado',
					'Nenhum usuario com o id informado foi encontrado',
					'students_not_found'
				)
			)
		}
		return right(studentsData)
	}
}
	