import { Room } from '@/domain/rooms/rooms-model'

export interface RoomsRepository {
    create(data: Room): Promise<Room>
    find(id: string): Promise<Room | null>
    update(id: string, data: Partial<Room>): Promise<Room>
    delete(id: string): Promise<Room>
    list(): Promise<Room[]>
}