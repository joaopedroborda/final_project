
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { StudentGearsLoansRepository } from '@/repositories/interfaces/students-repository'
import { GearsLoan } from '../gears-loan-model'
import { ReadStudentsGearsLoansSchema } from './read-students-gears-loan.schema'

type ReadGearsLoansResult = Either<
ZodCustomError,
GearsLoan
>

export class ReadStudentsGearsLoansUsecase {
    constructor (
        private readonly studentsgearsloansRepository: StudentGearsLoansRepository
    ){}

    async execute(payload: JSONObject):  Promise<ReadGearsLoansResult> {
        const parse = ReadStudentsGearsLoansSchema.safeParse(payload)
            
        if(parse.error){
            return left(
                new ZodCustomError(parse.error)
            )
        }
        const data = parse.data

        const studentgearsloanData = await this.studentsgearsloansRepository.find(data.student_id)

        if(!studentgearsloanData){
            return left(
                new NotFoundError(
                    'Empréstimo de Equipamentos Não encontrado',
                    'Nenhum empréstimo de equipamentos com o id informado foi encontrado',
                    'gears_loan_not_found'
                )
            )
        }
        return right(studentgearsloanData)
    }
}
    