import z from "zod";
import { RoomSchema } from "../rooms-schema";

export const UpdateRoomSchema = RoomSchema.omit({
  id: true,
})
  .partial()
  .extend({ id: z.string() });

export type UpdateRoomSchema = z.infer<typeof UpdateRoomSchema>;
