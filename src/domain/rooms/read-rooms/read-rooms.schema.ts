import z from "zod";

export const ReadRoomsSchema = z.string({
  id: z.string(),
});

export type ReadRoomsSchema = z.infer<typeof ReadRoomsSchema>;
