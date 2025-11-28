import { SydbStudentRepository } from '@/repositories/sydb/students-repository'

import { DeleteStudentUsecase } from './delete-students.usecase'

export function makeDeleteStudents() {
	return new DeleteStudentUsecase(
		new SydbStudentRepository()
	)
}