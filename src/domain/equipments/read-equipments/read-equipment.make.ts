import { SydbUserRepository } from '@/repositories/sydb/equipment-repository'
import { ReadEquipmentUseCase } from './read-equipment.usecase'



export function makeReadEquipment(){
    return new ReadEquipmentUseCase(
        new SydbReadRepository()
    )
}