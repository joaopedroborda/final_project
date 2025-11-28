<<<<<<< HEAD
import { SydbStudentRepository } from '@/repositories/sydb/students-repository'

import { CreateStudentUsecase } from './create-students.usecase'

export function makeCreateStudent() {
	return new CreateStudentUsecase(
=======
import { SydbUserRepository } from '@/sydb/user-repository'
import { CreateStudentUseCase } from './create-students.usecase'

export function makeCreateStudent(){
	return new CreateStudentUseCase(
>>>>>>> 6168fce2a95b413142af33dfd3d149efe2c85e7f
		new SydbStudentRepository()
	)
}