import z from 'zod'

export const DeleteRoomSchema = z.object({
  id: z.string()
})

export type DeleteRoomSchema = z.infer<typeof DeleteRoomSchema>