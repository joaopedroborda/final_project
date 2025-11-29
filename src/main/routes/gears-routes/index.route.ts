import { FastifyTypedInstance } from "@/main/app"
import { CreateGearRoute } from "./create-gear.route"
import { ListGearRoute } from "./list-gears.route"
import { ReadGearRoute } from "./read-gear.route"
import { UpdateGearRoute } from "./update-gear.route"
import { DeleteGearRoute } from "./delete-gear.route"

export const GearsRoute = (app: FastifyTypedInstance) => {
     app.register(CreateGearRoute)
     app.register(ListGearRoute)
     app.register(ReadGearRoute)
     app.register(UpdateGearRoute)
     app.register(DeleteGearRoute)
}