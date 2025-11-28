<<<<<<<< HEAD:src/domain/students/read-students/read-students.usecase.ts


import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
========
import { NotFoundError } from '@/core/errors/custom/client-error/notfound-error'
>>>>>>>> 6168fce2a95b413142af33dfd3d149efe2c85e7f:src/domain/students/read-alunos/read-alunos.usecase.ts
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
import { StudentsRepository } from '@/repositories/interfaces/students-repository'
import { ReadStudentsSchema } from './read-students.schema'



export class ReadStudentsUsecase {
	constructor (
		private readonly studentsRepository: StudentsRepository
	){}

	async execute(payload: JSONObject){
		const parse =  ReadStudentsSchema.safeParse(payload)
			
		if(parse.error){
			return left(
				new ZodCustomError(parse.error)
			)
		}
		const date = parse.data

		const studentsDate = await this.studentsRepository.find(date.id)

		if(!studentsDate){
			return left(
				new NotFoundError(
					'Usuario Não encontrado',
					'Nenhum usuario com o id informado foi encontrado',
					'students_not_found'
				)
			)
		}
		return right(studentsDate)
	}
}
	