import { SydbGearRepository } from "@/repositories/sydb/gears-repository";

import { ReadGearsUsecase } from "./read-gears.usecase";

export function makeReadGear() {
  return new ReadGearsUsecase(
    new SydbGearRepository()
  )
}
