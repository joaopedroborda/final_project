import { SydbRoomRepository } from "@/repositories/sydb/rooms-repository";
import { CreateRoomUsecase } from "./create-rooms.usecase";

export function makeCreateRoom() {
  return new CreateRoomUsecase(new SydbRoomRepository());
}
