import z from 'zod'

export const ReadEquipmentsSchema = z.string({
    id: z.string(),
})

export type ReadEquipmentsSchema = z.infer<typeof ReadEquipmentsSchema>