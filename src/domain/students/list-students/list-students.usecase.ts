import { StudentsRepository } from '@/repositories/interfaces/students-repository'
import { Student } from '@/domain/students/students-model'

export class ListStudentsUsecase {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  async execute(): Promise<Student[]> {
    return this.studentsRepository.list()
  }
}