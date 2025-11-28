import { SydbUserRepository } from '@/sydb/user-repository'
import { ReadStudentUseCase } from './create-alunos.usecase'



export function makeReadStudent(){
    return new ReadStudentUseCase(
        new SydbReadRepository()
    )
}