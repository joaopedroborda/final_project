import z from 'zod'

import { equipmentSchema } from '../equipamento-schema'

export const CreateEquipmentSchema = equipmentSchema.omit({
    id: true,
})

export type CreateStudentSchema = z.infer<typeof CreateEquipmentSchema>