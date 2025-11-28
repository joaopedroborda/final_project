import { Student } from '@/domain/students/students-model'

export interface StudentsRepository {
	create(data: Student): Promise<Student>
	find(id: string): Promise<Student | null>
	update(id: string, data: Partial<Student>): Promise<Student>
	delete(id: string): Promise<Student>
}