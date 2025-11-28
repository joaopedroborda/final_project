import z from 'zod'

export const ReadEquipmentSchema = z.string({
    id: z.string(),
})

export type ReadEquipmentSchema = z.infer<typeof ReadEquipmentSchema>