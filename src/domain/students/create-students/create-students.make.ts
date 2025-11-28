import { SydbStudentRepository } from '@/repositories/sydb/students-repository'

import { CreateStudentUsecase } from './create-students.usecase'

export function makeCreateStudent() {
	return new CreateStudentUsecase(
		new SydbStudentRepository()
	)
}