import { randomUUID } from 'crypto'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
//import { EquipmentRepository } from '@/repositor/interface/user-repository'

import { Equipment } from '../equipamento-models'
import { CreateEquipmentSchema } from './create-equipment.schema'

export class CreateEquipmentUseCase {
    constructor(
        private readonly equipmentsRepository: EquipmentRepository
    ){}

    async execute(payload: JSONObject){
        const parse = CreateEquipmentSchema.safeParse(payload)
        
        if(parse.error){
            return left(
                new ZodCustomError(parse.error)
            )
        }
        const data = parse.data

        const userDate: Equipment = {
            ...data,
            id: randomUUID(),
        }
        await this.equipmentsRepository.create(userDate)

        return right(userDate)
    }
}