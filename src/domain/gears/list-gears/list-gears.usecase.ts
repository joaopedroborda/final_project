import { GearsRepository } from '@/repositories/interfaces/gears-repository'
import { Gear } from '@/domain/gears/gears-model'

export class ListGearsUsecase {
  constructor(private readonly gearsRepository: GearsRepository) {}

  async execute(): Promise<Gear[]> {
    return this.gearsRepository.list()
  }
}