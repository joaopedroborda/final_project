import z from "zod";

export const ReadRoomsSchema = z.object({
  id: z.string(),
});

export type ReadRoomsSchema = z.infer<typeof ReadRoomsSchema>;
