import z from 'zod'
import { GearsSchema } from '../gears-schema'

export const UpdateGearsSchema = GearsSchema.omit({
    id: true,
}).partial().extend({ id: z.string() })

export type UpdateGearschema = z.infer<typeof UpdateGearsSchema>