import { SydbStudentRepository } from '@/repositories/sydb/students-repository'
import { UpdateStudentUseCase } from './update-students.usecase'

export function makeUpdateStudent(){
	return new UpdateStudentUseCase(
		new SydbStudentRepository()
	)
}