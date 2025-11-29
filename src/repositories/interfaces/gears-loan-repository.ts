import { GearsLoan } from '@/domain/gears-loan/gears-loan-model'

export interface GearsLoanRepository {
    create(data: GearsLoan): Promise<GearsLoan>
    find(student_id: string, gears_id: string): Promise<GearsLoan | null>
    //find(gears_id: string): Promise<GearsLoan | null>
    delete(id: string): Promise<GearsLoan>
    list(): Promise<GearsLoan[]>
}