
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { GearsLoansRepository } from '@/repositories/interfaces/gears-repository'
import { GearsLoan } from '../gears-loan-model'
import { ReadGearsLoansSchema } from './read-gears-gears-loan.schema'

type ReadGearsLoansResult = Either<
ZodCustomError,
GearsLoan
>

export class ReadGearsLoansUsecase {
    constructor (
        private readonly gearsloansRepository: GearsLoansRepository
    ){}

    async execute(payload: JSONObject):  Promise<ReadGearsLoansResult> {
        const parse = ReadGearsLoansSchema.safeParse(payload)
            
        if(parse.error){
            return left(
                new ZodCustomError(parse.error)
            )
        }
        const data = parse.data

        const gearsloanData = await this.gearsloansRepository.find(data.gears_id)

        if(!gearsloanData){
            return left(
                new NotFoundError(
                    'Empréstimo de Equipamentos Não encontrado',
                    'Nenhum empréstimo de equipamentos com o id informado foi encontrado',
                    'gears_loan_not_found'
                )
            )
        }
        return right(gearsloanData)
    }
}
    