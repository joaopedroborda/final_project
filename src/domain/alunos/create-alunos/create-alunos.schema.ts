import z from 'zod'

import { studentSchema } from '../alunos-schema'

export const CreateStudentSchema = studentSchema.omit({
	id: true,
})

export type CreateStudentSchema = z.infer<typeof CreateStudentSchema>