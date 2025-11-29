import { RoomBooking } from '@/domain/room-booking/room-booking-model'
import { database } from '@/infra/database'
import { RoomBookingsRepository } from '@/repositories/interfaces/rooms-booking-repository'

export class SydbRoomBookingRepository implements RoomBookingsRepository{
    async create(data: RoomBooking): Promise< RoomBooking > {
        database.ref(`room-booking/${data.id}`).set(data)
        return { ...data }
    }

    async find(id: string): Promise<RoomBooking | null> {
        return database.ref(`room-booking/${id}`).val() as RoomBooking | null
    }

    async update(id: string, data: Partial<RoomBooking>): Promise<RoomBooking> {
        const roombooking = database.ref(`room-booking/${id}`).update(data).val() as RoomBooking
        return roombooking
    }

    async delete(id: string): Promise<RoomBooking> {
        const deletar = database.ref(`room-booking/${id}`).delete().val() as RoomBooking
        return deletar
    }

    async list(): Promise<RoomBooking[]> {
        const roombookingObj = database.ref('room-booking').val() as Record<string, RoomBooking> | null
        if (!roombookingObj) {
            return []
        }
        return Object.values(roombookingObj)
    }

    async findByRoom(room_id: string): Promise<RoomBooking[]> {
    const allBookings = database.ref('room-booking').val() as Record<string, RoomBooking> | null
    if (!allBookings) return []

    return Object.values(allBookings).filter(b => b.room_id === room_id)
}

}