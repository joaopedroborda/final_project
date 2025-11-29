import { SydbStudentRepository } from '@/repositories/sydb/students-repository'

import { ListStudentsUsecase } from './list-students.usecase'

export function makeListStudent() {
    return new ListStudentsUsecase(
        new SydbStudentRepository()
    )
}