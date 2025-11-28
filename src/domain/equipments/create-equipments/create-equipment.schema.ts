import z from 'zod'

import { equipmentSchema } from '../equipment-schema'

export const CreateEquipmentSchema = equipmentSchema.omit({
    id: true,
})

export type CreateStudentSchema = z.infer<typeof CreateEquipmentSchema>