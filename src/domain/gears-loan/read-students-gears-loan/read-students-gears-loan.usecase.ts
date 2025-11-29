
import { NotFoundError } from '@/core/errors/custom/client-error/not-found-error'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { GearsLoanRepository } from '@/repositories/interfaces/gears-loan-repository'
import { GearsLoan } from '../gears-loan-model'
import { ReadStudentsGearsLoansSchema } from './read-students-gears-loan.schema'

type ReadGearsLoansResult = Either<
ZodCustomError,
GearsLoan
>

export class ReadStudentsGearsLoansUsecase {
    constructor (
        private readonly studentsgearsloansRepository: GearsLoanRepository
    ){}

    async execute(payload: JSONObject):  Promise<ReadGearsLoansResult> {
        const parse = ReadStudentsGearsLoansSchema.safeParse(payload)
            
        if(parse.error){
            return left(
                new ZodCustomError(parse.error)
            )
        }
        const data = parse.data

        const studentgearsloanData = await this.studentsgearsloansRepository.find_student(data.student_id)

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
    