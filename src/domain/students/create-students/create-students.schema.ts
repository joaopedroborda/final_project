import z from 'zod'

import { StudentSchema } from '../students-schema'

export const CreateStudentSchema = StudentSchema.omit({
	id: true,
})

export type CreateStudentSchema = z.infer<typeof CreateStudentSchema>