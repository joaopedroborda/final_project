import { SydbUserRepository } from '@/repositories/sydb/equipments-repository'
import { CreateGearsUseCase } from './create-gears.usecase'

export function makeCreateGears(){
    return new CreateGearsUseCase(
        new SydbGearsRepository()
    )
}