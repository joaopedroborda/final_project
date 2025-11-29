import { SydbGearsRepository } from '@/repositories/sydb/students-repository'
import { UpdateGearsUsecase } from './update-gears.usecase'

export function makeUpdateGears(){
    return new UpdateGearsUsecase(
        new SydbGearsRepository()
    )
}