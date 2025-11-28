import { z } from 'zod'


export const StudentSchema = z.object({
	id: z.string(),
	name: z.string(),
	age: z.string(),
    email: z.email(),
	
})

export type StudentSchema = z.infer<typeof StudentSchema>