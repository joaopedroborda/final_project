import { RoomBooking } from '@/domain/room-booking/room-booking-model'

export interface RoomBookingsRepository {
    create(data: RoomBooking): Promise<RoomBooking>
    find(id: string): Promise<RoomBooking | null>
    update(id: string, data: Partial<RoomBooking>): Promise<RoomBooking>
    delete(id: string): Promise<RoomBooking>
    list(): Promise<RoomBooking[]>
    findByRoom(room_id: string): Promise<RoomBooking[]>
}