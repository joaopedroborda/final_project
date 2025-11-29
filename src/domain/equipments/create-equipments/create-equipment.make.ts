import { SydbUserRepository } from '@/repositories/sydb/equipments-repository'
import { CreateEquipmentUseCase } from './create-equipment.usecase'

export function makeCreateEquipment(){
    return new CreateEquipmentUseCase(
        new SydbEquipmentRepository()
    )
}