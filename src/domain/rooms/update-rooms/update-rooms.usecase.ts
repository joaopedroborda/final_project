import { NotFoundError } from "@/core/errors/custom/client-error/not-found-error";
import { ZodCustomError } from "@/core/errors/custom/zod-custom-error";
import { left } from "@/core/errors/either";
import { right } from "@/core/errors/either";
//import { RoomsRepository } from "@/repositories/interfaces/students-repository";
import { UpdateRoomSchema } from "./update-rooms.schema";
import { Room } from "../rooms-model";

export class UpdateRoomUsecase {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async execute(payload: JSONObject) {
    const parse = UpdateRoomSchema.safeParse(payload);

    if (parse.error) {
      return left(new ZodCustomError(parse.error));
    }
    const data = parse.data;

    const roomExame = await this.roomsRepository.find(data.id);

    if (!roomExame) {
      return left(
        new NotFoundError(
          "Sala Não encontrada",
          "Nenhuma sala com o id informado foi encontrada",
          "rooms_not_found"
        )
      );
    }

    const roomData: Partial<Room> = {
      ...data,
    };
    await this.roomsRepository.update(data.id, roomData);

    return right(roomData);
  }
}
