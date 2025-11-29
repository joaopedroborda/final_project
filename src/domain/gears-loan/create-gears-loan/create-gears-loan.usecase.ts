import { randomUUID } from 'node:crypto'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { GearsLoanRepository } from '@/repositories/interfaces/gears-loan-repository'
import { GearsLoan } from '../gears-loan-model'
import { CreateGearsLoanSchema } from './create-gears-loan.schema'
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'

type CreateGearsLoanResult = Either<
ZodCustomError,
GearsLoan
>
export class CreateGearsLoanUsecase {
    constructor(
        private readonly gearsloansRepository: GearsLoanRepository
    ) { }

    async execute(payload: JSONObject): Promise<CreateGearsLoanResult> {
        const parse = CreateGearsLoanSchema.safeParse(payload)

        if(parse.error) {
            return left(
                new ZodCustomError(parse.error)
            )
        }

        const data = parse.data

        const gearsloanData: GearsLoan = {
            ... data,
            id: randomUUID(),
        }

        if(!gearsloanData.gears_id){
            return left(
                new NotFoundError(
                    'Sala Não encontrada',
                    'Nenhum sala com o id informado foi encontrada',
                    'rooms_not_found'
                )
            )
        }

        if(!gearsloanData.student_id){
            return left(
                new NotFoundError(
                    'Estudante Não encontrado',
                    'Nenhum estudante com o id informado foi encontrado',
                    'student_not_found'
                )
            )
        }

        await this.gearsloansRepository.create(gearsloanData)

        return right(gearsloanData)
    
}
}