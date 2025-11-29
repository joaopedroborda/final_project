import { RoomsRepository } from '@/repositories/interfaces/rooms-repository'
import { Room } from '@/domain/rooms/rooms-model'

export class ListRoomsUsecase {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async execute(): Promise<Room[]> {
    return this.roomsRepository.list()
  }
}