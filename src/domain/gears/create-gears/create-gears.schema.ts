import z from 'zod'

import { GearsSchema } from '../gears-schema'

export const CreateGearsSchema = GearsSchema.omit({
    id: true,
})

export type CreateGearsSchema = z.infer<typeof CreateGearsSchema>