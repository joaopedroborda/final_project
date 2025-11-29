import z from "zod";

export const DeleteRoomSchema = z.object({
  id: z.string(),
  name: z.string(),
  capacity: z.string(),
  description: z.string(),
});

export type DeleteRoomSchema = z.infer<typeof DeleteRoomSchema>;
