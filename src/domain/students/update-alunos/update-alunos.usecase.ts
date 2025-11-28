
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
import { StudentsRepository } from '@/repositories/interfaces/students-repository'


<<<<<<<< HEAD:src/domain/students/update-students/update-students.usecase.ts
import { UpdateStudentSchema } from './update-students.schema'
import { Student } from '../students-model'
========
import { UpdateStudentSchema } from './update-alunos.schema'
import { Student } from '../students-models'
>>>>>>>> 6168fce2a95b413142af33dfd3d149efe2c85e7f:src/domain/students/update-alunos/update-alunos.usecase.ts

export class UpdateStudentUseCase{
	constructor(
		private readonly studentsRepository: StudentsRepository
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
		await this.studentsRepository.update(data.id, userData)


		return right(userData)
	}
}