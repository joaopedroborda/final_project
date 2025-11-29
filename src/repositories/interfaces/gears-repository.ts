import { Gear } from '@/domain/gears/gears-model'

export interface GearsRepository {
    create(data: Gear): Promise<Gear>
    find(id: string): Promise<Gear | null>
    update(id: string, data: Partial<Gear>): Promise<Gear>
    delete(id: string): Promise<Gear>
    list(): Promise<Gear[]>
}