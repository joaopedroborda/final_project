import { SydbRoomBookingRepository } from "@/repositories/sydb/rooms-booking-repository";

import { ReadRoomsBookingUsecase } from "./read-room-booking.usecase";

export function makeReadRoom() {
  return new ReadRoomsBookingUsecase(
    new SydbRoomBookingRepository()
  )
}
