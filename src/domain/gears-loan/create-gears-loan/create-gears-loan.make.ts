import { SydbStudentRepository } from '@/repositories/sydb/gears-repository'

import { CreateGearsLoanUsecase } from './create-gears-loan.usecase'

export function makeCreateGearsLoan() {
    return new CreateGearsLoanUsecase(
        new SydbStudentRepository()
    )
}