//import { SydbRoomRepository } from "@/repositories/sydb/rooms-repository";
import { CreateRoomsUsecase } from "./create-rooms.usecase";

export function makeCreateRoom() {
  return new CreateRoomsUsecase(new SydbRoomRepository());
}
