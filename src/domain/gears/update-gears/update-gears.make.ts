import { SydbGearRepository } from "@/repositories/sydb/gears-repository";
import { UpdateGearUsecase } from "./update-gears.usecase";

export function makeUpdateGear() {
  return new UpdateGearUsecase(new SydbGearRepository());
}
