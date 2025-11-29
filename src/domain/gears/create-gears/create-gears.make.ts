import { SydbGearRepository } from "@/repositories/sydb/gears-repository";
import { CreateGearUsecase } from "./create-gears.usecase";

export function makeCreateGear() {
  return new CreateGearUsecase(new SydbGearRepository());
}
