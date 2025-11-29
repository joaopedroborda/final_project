import { SydbGearRepository } from '@/repositories/sydb/gears-repository'

import { ListGearsUsecase } from './list-gears.usecase'

export function makeListGear() {
    return new ListGearsUsecase(
        new SydbGearRepository()
    )
}