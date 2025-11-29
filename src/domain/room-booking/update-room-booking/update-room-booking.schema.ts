import z from "zod";
import { RoomBookingSchema } from "../room-booking-schema";

export const UpdateRoomBookingSchema = RoomBookingSchema.omit({
  id: true,
})
  .partial()
  .extend({ id: z.string() });

export type UpdateRoomBookingSchema = z.infer<typeof UpdateRoomBookingSchema>;
