import { NotFoundError } from "@/core/errors/custom/client-error/not-found-error";
import { ZodCustomError } from "@/core/errors/custom/zod-custom-error";
import { left } from "@/core/errors/either";
import { right } from "@/core/errors/either";
//import { RoomsRepository } from "@/repositories/interfaces/rooms-repository";
import { ReadRoomsSchema } from "./read-rooms.schema";

export class ReadRoomsUsecase {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async execute(payload: JSONObject) {
    const parse = ReadRoomsSchema.safeParse(payload);

    if (parse.error) {
      return left(new ZodCustomError(parse.error));
    }
    const data = parse.data;

    const roomsData = await this.roomsRepository.find(data.id);

    if (!roomsData) {
      return left(
        new NotFoundError(
          "Sala Não encontrada",
          "Nenhuma sala com o id informado foi encontrada",
          "rooms_not_found"
        )
      );
    }
    return right(roomsData);
  }
}
