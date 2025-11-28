import { SydbUserRepository } from '@/sydb/user-repository'
import { ReadEquipmentUseCase } from './read-equipment.usecase'



export function makeReadEquipment(){
    return new ReadEquipmentUseCase(
        new SydbReadRepository()
    )
}