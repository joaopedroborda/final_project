import { SydbStudentRepository } from '@/repositories/sydb/gears-repository'

import { ListGearsLoansUsecase } from './list-gears-loan.usecase'

export function makeListGearsLoan() {
    return new ListGearsLoansUsecase(
        new SydbGearsLoanRepository()
    )
}