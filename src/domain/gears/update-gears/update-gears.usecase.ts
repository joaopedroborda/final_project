
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left } from '@/core/errors/either'
import { right } from '@/core/errors/either'
import { GearsRepository } from '@/repositories/interfaces/gears-repository'
import { UpdateGearsSchema } from './update-gears.schema'
import { Gears } from '../gears-model'


export class UpdateGearsUsecase{
    constructor(
        private readonly gearsRepository: GearsRepository
    ){}

    async execute(payload: JSONObject){
        const parse = UpdateGearsSchema.safeParse(payload)
        
        if(parse.error){
            return left(
                new ZodCustomError(parse.error)
            )
        }
        const data = parse.data

        const gearsExame = await this.gearsRepository.find(data.id)

        if(!gearsExame){
            return left(
                new NotFoundError(
                    'Equipamento Não encontrado',
					'Nenhum equipamento com o id informado foi encontrado',
					'equipamento_not_found'
                )
            )
        }

        const gearsData: Partial<Gears> = {
            ...data,
        }
        await this.gearsRepository.update(data.id, gearsData)


        return right(gearsData)
    }
}