import z from 'zod'

export const DeleteGearSchema = z.object({
  id: z.string()
})

export type DeleteGearSchema = z.infer<typeof DeleteGearSchema>