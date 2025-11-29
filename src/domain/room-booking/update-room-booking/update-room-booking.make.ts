import { SydbRoomBookingRepository } from "@/repositories/sydb/rooms-booking-repository";
import { UpdateRoomBookingUsecase } from "./update-room-booking.usecase";

export function makeUpdateRoomBooking() {
  return new UpdateRoomBookingUsecase(new SydbRoomBookingRepository());
}
