import { GearsLoanRepository } from '@/repositories/interfaces/gears-loan-repository'
import { GearsLoan } from '../gears-loan-model'


export class ListGearsLoansUsecase {
  constructor(private readonly gearsloansRepository: GearsLoanRepository) {}

  async execute(): Promise<GearsLoan[]> {
    return this.gearsloansRepository.list()
  }
}