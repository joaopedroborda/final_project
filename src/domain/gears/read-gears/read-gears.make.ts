import { SydbUserRepository } from '@/repositories/sydb/equipment-repository'
import { ReadGearsUseCase } from './read-gears.usecase'



export function makeReadGears(){
    return new ReadGearsUseCase(
        new SydbReadRepository()
    )
}