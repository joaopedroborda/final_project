import { SydbRoomRepository } from "@/repositories/sydb/rooms-repository";

import { ReadRoomsUsecase } from "./read-rooms.usecase";

export function makeReadRoom() {
  return new ReadRoomsUsecase(
    new SydbRoomRepository()
  )
}
