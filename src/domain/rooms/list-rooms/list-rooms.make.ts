import { SydbRoomRepository } from '@/repositories/sydb/rooms-repository'

import { ListRoomsUsecase } from './list-rooms.usecase'

export function makeListRoom() {
    return new ListRoomsUsecase(
        new SydbRoomRepository()
    )
}