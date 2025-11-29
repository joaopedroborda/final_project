import { SydbStudentRepository } from '@/repositories/sydb/students-repository'

import { DeleteGearsLoanUsecase } from './finish-gears-loan.usecase'

export function makeDeleteGearsLoans() {
    return new DeleteGearsLoanUsecase(
        new SydbStudentRepository()
    )
}