import { SydbGearsLoanRepository } from '@/repositories/sydb/gears-repository'
import { ReadGearsUsecase } from '@/domain/gears/read-gears/read-gears.usecase'

export function makeReadGearsLoan() {
    return new ReadGearsUsecase(
        new SydbGearsLoanRepository()
    )
}