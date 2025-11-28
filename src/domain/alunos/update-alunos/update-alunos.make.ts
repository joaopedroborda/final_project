import { SydbStudentRepository } from '@/sydb/student-repository'
import { UpdateStudentUseCase } from './update-alunos.usecase'

export function makeUptateStudent(){
	return new UpdateStudentUseCase(
		new SydbStudentRepository()
	)
}