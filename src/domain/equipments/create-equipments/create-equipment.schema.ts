import z from 'zod'

import { EquipmentSchema } from '../equipment-schema'

export const CreateEquipmentSchema = EquipmentSchema.omit({
    id: true,
})

export type CreateEquipmentSchema = z.infer<typeof CreateEquipmentSchema>