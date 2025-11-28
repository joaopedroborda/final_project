import z from 'zod'

import { studentSchema } from '../students-schema'

export const CreateStudentSchema = studentSchema.omit({
	id: true,
})

export type CreateStudentSchema = z.infer<typeof CreateStudentSchema>