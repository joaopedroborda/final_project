import { SydbUserRepository } from '@/sydb/user-repository'
import { CreateStudentUseCase } from './create-students.usecase'

export function makeCreateStudent(){
	return new CreateStudentUseCase(
		new SydbStudentRepository()
	)
}