import { SydbUserRepository } from '@/sydb/user-repository'
import { CreateStudentUseCase } from './create-alunos.usecase'

export function makeCreateStudent(){
	return new CreateStudentUseCase(
		new SydbStudentRepository()
	)
}