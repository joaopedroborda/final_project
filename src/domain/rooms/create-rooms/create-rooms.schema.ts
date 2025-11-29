import z from "zod";

import { RoomSchema } from "../rooms-schema";

export const CreateRoomSchema = RoomSchema.omit({
  id: true,
});

export type CreateRoomSchema = z.infer<typeof CreateRoomSchema>;
