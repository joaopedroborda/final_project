import z from 'zod'
import { studentSchema } from '../students-schema'

export const UpdateStudentSchema = studentSchema.omit({
	id: true,
	
    
}).partial().extend({ id: z.string() })

export type UpdateStudentSchema = z.infer<typeof UpdateStudentSchema>