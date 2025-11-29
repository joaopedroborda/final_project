import { randomUUID } from "node:crypto";
import { ZodCustomError } from "@/core/errors/custom/zod-custom-error";
import { left, right } from "@/core/errors/either";
//import { RoomsRepository } from "@/repositories/interfaces/students-repository";
import { CreateRoomSchema } from "./create-rooms.schema";
import { Room } from "../rooms-model";

export class CreateRoomsUsecase {
  constructor(private readonly RoomsRepository: RoomsRepository) {}

  async execute(payload: JSONObject) {
    const parse = CreateRoomSchema.safeParse(payload);

    if (parse.error) {
      return left(new ZodCustomError(parse.error));
    }

    const data = parse.data;

    const roomData: Room = {
      ...data,
      id: randomUUID(),
    };

    await this.RoomsRepository.create(roomData);

    return right(roomData);
  }
}
