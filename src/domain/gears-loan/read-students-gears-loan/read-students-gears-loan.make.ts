//import { SydbStudentsGearsLoanRepository } from '@/repositories/sydb/gears-repository'
import { ReadStudentsGearsLoansUsecase } from './read-students-gears-loan.usecase'

export function makeStudentsReadGearsLoan() {
    return new ReadStudentsGearsLoansUsecase(
        new SydbStudentsGearsLoanRepository()
    )
}