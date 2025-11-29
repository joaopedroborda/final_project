import { Room } from '@/domain/rooms/rooms-model'
import { database } from '@/infra/database'
import { RoomsRepository } from '@/repositories/interfaces/rooms-repository'

export class SydbRoomRepository implements RoomsRepository{
    async create(data: Room): Promise< Room > {
        database.ref(`rooms/${data.id}`).set(data)
        return { ...data }
    }

    async find(id: string): Promise<Room | null> {
        return database.ref(`rooms/${id}`).val() as Room | null
    }

    async update(id: string, data: Partial<Room>): Promise<Room> {
        const room = database.ref(`rooms/${id}`).update(data).val() as Room
        return room
    }

    async delete(id: string): Promise<Room> {
        const deletar = database.ref(`rooms/${id}`).delete().val() as Room
        return deletar
    }

    async list(): Promise<Room[]> {
        const roomsObj = database.ref('rooms').val() as Record<string, Room> | null
        if (!roomsObj) {
            return []
        }
        return Object.values(roomsObj)
    }
}