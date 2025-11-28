import z from 'zod'
import { StudentSchema } from '../students-schema'

export const UpdateStudentSchema = StudentSchema.omit({
	id: true,
}).partial().extend({ id: z.string() })

export type UpdateStudentSchema = z.infer<typeof UpdateStudentSchema>