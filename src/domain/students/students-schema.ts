import { z } from 'zod'


export const studentSchema = z.object({
	id: z.string(),
	name: z.string(),
	age: z.string(),
    email: z.email(),
	
})

export type studentSchema = z.infer<typeof studentSchema>