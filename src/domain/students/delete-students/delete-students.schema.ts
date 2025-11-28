import z from 'zod'

export const DeleteStudentSchema = z.object({
	id: z.string(),
	name: z.string(),
	age: z.string(),
	email: z.email(),
})

export type DeleteStudentSchema = z.infer<typeof DeleteStudentSchema>