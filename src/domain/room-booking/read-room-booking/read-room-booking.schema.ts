import z from "zod";

export const ReadRoomsBookingSchema = z.object({
  id: z.string(),
});

export type ReadRoomsBookingSchema = z.infer<typeof ReadRoomsBookingSchema>;
