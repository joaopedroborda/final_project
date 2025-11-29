import { SydbRoomRepository } from "@/repositories/sydb/rooms-repository";
import { DeleteRoomUsecase } from "./delete-rooms.usecase";

export function makeDeleteRooms() {
  return new DeleteRoomUsecase(new SydbRoomRepository());
}
