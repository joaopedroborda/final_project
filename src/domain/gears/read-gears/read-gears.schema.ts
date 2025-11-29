import z from 'zod'

export const ReadGearsSchema = z.object({
    id: z.string(),
})

export type ReadGearsSchema = z.infer<typeof ReadGearsSchema>