import { SydbRoomBookingRepository } from "@/repositories/sydb/rooms-booking-repository";
import { SydbRoomRepository } from "@/repositories/sydb/rooms-repository";
import { SydbStudentRepository } from "@/repositories/sydb/students-repository";
import { CreateRoomBookingUsecase } from "./create-room-booking.usecase";

export function makeCreateRoomBooking() {
  return new CreateRoomBookingUsecase(
    new SydbRoomBookingRepository(),
    new SydbRoomRepository(),
    new SydbStudentRepository()
  );
}
