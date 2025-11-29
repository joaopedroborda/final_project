import z from "zod";

import { RoomBookingSchema } from "../room-booking-schema";

export const CreateRoomBookingSchema = RoomBookingSchema.omit({
  id: true,
});

export type CreateRoomBookingSchema = z.infer<typeof CreateRoomBookingSchema>;
