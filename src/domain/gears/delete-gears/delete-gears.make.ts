import { SydbGearRepository } from '@/repositories/sydb/gears-repository'

import { DeleteGearUsecase } from './delete-gears.usecase'

export function makeDeleteGears() {
    return new DeleteGearUsecase(
        new SydbGearRepository()
    )
}