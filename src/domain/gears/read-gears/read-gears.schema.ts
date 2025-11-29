import z from 'zod'

export const ReadGearsSchema = z.string({
    id: z.string(),
})

export type ReadGearsSchema = z.infer<typeof ReadGearsSchema>