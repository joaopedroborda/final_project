import { z } from 'zod'


export const EquipmentSchema = z.object({
	id: z.string(),
	name: z.string(),
	//não precisa mais
	//total_quantity: z.number(),
	
})

export type EquipmentSchema = z.infer<typeof EquipmentSchema>