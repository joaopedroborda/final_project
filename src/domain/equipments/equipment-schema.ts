import { z } from 'zod'


export const equipmentSchema = z.object({
	id: z.string(),
	name: z.string(),
	total_quantity: z.number(),
	
})

export type equipmentSchema = z.infer<typeof equipmentSchema>