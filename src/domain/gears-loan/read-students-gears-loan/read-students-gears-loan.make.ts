import { SydbGearsLoanRepository } from '@/repositories/sydb/gears-loan-repository'
import { ReadStudentsGearsLoansUsecase } from './read-students-gears-loan.usecase'

export function makeStudentsReadGearsLoan() {
    return new ReadStudentsGearsLoansUsecase(
        new SydbGearsLoanRepository()
    )
}