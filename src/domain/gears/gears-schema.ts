import { z } from 'zod'


export const GearsSchema = z.object({
	id: z.string(),
	name: z.string(),
	//não precisa mais
	//total_quantity: z.number(),
	
})

export type GearsSchema = z.infer<typeof GearsSchema>