import { SydbGearsLoanRepository } from '@/repositories/sydb/gears-loan-repository'
import { ReadGearsLoansUsecase } from './read-gears-gears-loan.usecase'

export function makeReadGearsLoan() {
    return new ReadGearsLoansUsecase(
        new SydbGearsLoanRepository()
    )
}