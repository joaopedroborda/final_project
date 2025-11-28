import z from 'zod'

export const ReadStudentsSchema = z.object({
	id: z.string(),
})
export type ReadStudentsSchema = z.infer<typeof ReadStudentsSchema>