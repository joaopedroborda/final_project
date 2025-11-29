import { z } from "zod";

export const RoomSchema = z.object({
  id: z.string(),
  name: z.string(),
  capacity: z.string(),
  description: z.string(),
});

export type RoomSchema = z.infer<typeof RoomSchema>;
