import { randomUUID } from 'crypto'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
//import { EquipmentRepository } from '@/repositor/interface/user-repository'
import { Gears} from '../gears-model'
import { CreateGearsSchema } from './create-gears.schema'

export class CreateGearsUseCase {
    constructor(
        private readonly gearsRepository: GearsRepository
    ){}

    async execute(payload: JSONObject){
        const parse = CreateGearsSchema.safeParse(payload)
        
        if(parse.error){
            return left(
                new ZodCustomError(parse.error)
            )
        }
        const data = parse.data

        const gearsData: Gears = {
            ...data,
            id: randomUUID(),
        }
        await this.gearsRepository.create(gearsData)

        return right(gearsData)
    }
}