import { SydbStudentRepository } from '@/repositories/sydb/students-repository'
import { UpdateStudentUsecase } from './update-students.usecase'

export function makeUpdateStudent(){
	return new UpdateStudentUsecase(
		new SydbStudentRepository()
	)
}