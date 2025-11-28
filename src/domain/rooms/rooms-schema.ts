import { z } from 'zod'


export const roomSchema = z.object({
	id: z.string(),
	name: z.string(),
	capacity: z.string(),
    //opcional:
    // description: z.string(),
	
})

export type roomSchema = z.infer<typeof roomSchema>