import { Student } from '@/domain/students/students-model'
import { database } from '@/infra/database'
import { StudentsRepository } from '@/repositories/interfaces/students-repository'

export class SydbStudentRepository implements StudentsRepository{
	async create(data: Student): Promise< Student > {
		database.ref(`students/${data.id}`).set(data)
		return { ...data }
	}

	async find(id: string): Promise<Student | null> {
		return database.ref(`students/${id}`).val() as Student | null
	}

	async update(id: string, data: Partial<Student>): Promise<Student> {
		const student = database.ref(`students/${id}`).update(data).val() as Student
		return student
	}

	async delete(id: string): Promise<Student> {
		const deletar = database.ref(`students/${id}`).delete().val() as Student
		return deletar
	}

	async list(): Promise<Student[]> {
		const studentsObj = database.ref('students').val() as Record<string, Student> | null
		if (!studentsObj) {
			return []
		}
		return Object.values(studentsObj)
	}
}