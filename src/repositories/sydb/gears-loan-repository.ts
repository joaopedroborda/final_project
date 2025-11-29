import { GearsLoan } from '@/domain/gears-loan/gears-loan-model'
import { database } from '@/infra/database'
import { GearsLoanRepository } from '../interfaces/gears-loan-repository'

export class SydbGearsLoanRepository implements GearsLoanRepository{

    async create(data: GearsLoan): Promise< GearsLoan > {
        database.ref(`gearsloan/${data.id}`).set(data)
        return { ...data }
    }

    async find(gears_id: string, student_id: string): Promise<GearsLoan | null> {
        return database.ref(`gearsloan/${gears_id}`).val() as GearsLoan | null
    }



    async delete(id: string): Promise<GearsLoan> {
        const deletar = database.ref(`gearsloan/${id}`).delete().val() as GearsLoan
        return deletar
    }

    async list(): Promise<GearsLoan[]> {
        const gearsloanObj = database.ref('gearsloan').val() as Record<string, GearsLoan> | null
        if (!gearsloanObj) {
            return []
        }
        return Object.values(gearsloanObj)
    }
}