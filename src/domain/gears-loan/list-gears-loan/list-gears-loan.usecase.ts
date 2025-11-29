import { GearsLoansRepository } from '@/repositories/interfaces/gears-repository'
import { GearsLoan } from '../gears-loan-model'


export class ListGearsLoansUsecase {
  constructor(private readonly gearsloansRepository: GearsLoansRepository) {}

  async execute(): Promise<GearsLoan[]> {
    return this.gearsloansRepository.list()
  }
}