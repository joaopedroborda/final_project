import { NotFoundError } from "@/core/errors/custom/client-error/not-found-error";
import { ZodCustomError } from "@/core/errors/custom/zod-custom-error";
import { left, right } from "@/core/errors/either";
//import { RoomsRepository } from "@/repositories/interfaces/rooms-repository";

import { DeleteRoomSchema } from "./delete-rooms.schema";
import { Room } from "../rooms-model";

export class DeleteRoomUsecase {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async execute(payload: JSONObject) {
    const parse = DeleteRoomSchema.safeParse(payload);

    if (parse.error) {
      return left(new ZodCustomError(parse.error));
    }
    const data = parse.data;

    const room = await this.roomsRepository.find(data.id);

    if (!room) {
      return left(
        new NotFoundError(
          "Sala Não encontrada",
          "Nenhuma sala com o id informado foi encontrada",
          "rooms_not_found"
        )
      );
    }

    const roomData: Promise<Room> = {
      ...data,
    };

    await this.roomsRepository.delete(data.id);

    return right(null);
  }
}
