import { SydbStudentRepository } from '@/repositories/sydb/students-repository'

import { ReadStudentsUsecase } from './read-students.usecase'

export function makeReadStudent() {
	return new ReadStudentsUsecase(
		new SydbStudentRepository()
	)
}