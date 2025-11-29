import { SydbRoomRepository } from "@/repositories/sydb/rooms-repository";
import { UpdateRoomUsecase } from "./update-rooms.usecase";

export function makeUpdateRoom() {
  return new UpdateRoomUsecase(new SydbRoomRepository());
}
