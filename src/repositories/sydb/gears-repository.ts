import { Gear } from '@/domain/gears/gears-model'
import { database } from '@/infra/database'
import { GearsRepository } from '@/repositories/interfaces/gears-repository'

export class SydbGearRepository implements GearsRepository{
    async create(data: Gear): Promise< Gear > {
        database.ref(`gears/${data.id}`).set(data)
        return { ...data }
    }

    async find(id: string): Promise<Gear | null> {
        return database.ref(`gears/${id}`).val() as Gear | null
    }

    async update(id: string, data: Partial<Gear>): Promise<Gear> {
        const gear = database.ref(`gears/${id}`).update(data).val() as Gear
        return gear
    }

    async delete(id: string): Promise<Gear> {
        const deletar = database.ref(`gears/${id}`).delete().val() as Gear
        return deletar
    }

    async list(): Promise<Gear[]> {
        const gearsObj = database.ref('gears').val() as Record<string, Gear> | null
        if (!gearsObj) {
            return []
        }
        return Object.values(gearsObj)
    }
}