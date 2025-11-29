import { randomUUID } from 'node:crypto'
import { ZodCustomError } from '@/core/errors/custom/zod-custom-error'
import { left, right, Either } from '@/core/errors/either'
import { GearsRepository } from '@/repositories/interfaces/gears-repository'
import { Gear } from '../gears-model'
import { CreateGearsSchema } from './create-gears.schema'

type CreateGearResult = Either<
ZodCustomError,
Gear
>
export class CreateGearUsecase {
	constructor(
		private readonly GearsRepository: GearsRepository
	) { }

	async execute(payload: JSONObject): Promise<CreateGearResult> {
		const parse = CreateGearsSchema.safeParse(payload)

		if(parse.error) {
			return left(
				new ZodCustomError(parse.error)
			)
		}

		const data = parse.data

		const gearData: Gear = {
			... data,
			id: randomUUID(),
		}

		await this.GearsRepository.create(gearData)

		return right(gearData)
	}
}