import { SydbGearsLoanRepository} from '@/repositories/sydb/gears-loan-repository'

import { CreateGearsLoanUsecase } from './create-gears-loan.usecase'

export function makeCreateGearsLoan() {
    return new CreateGearsLoanUsecase(
        new SydbGearsLoanRepository()
    )
}