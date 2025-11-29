import z from 'zod'

export const ReadGearsLoansSchema = z.object({
    gears_id: z.string(),
})
export type ReadGearsLoansSchema = z.infer<typeof ReadGearsLoansSchema>