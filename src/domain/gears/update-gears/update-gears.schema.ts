import z from "zod";
import { GearsSchema } from "../gears-schema";

export const UpdateGearSchema = GearsSchema.omit({
  id: true,
})
  .partial()
  .extend({ id: z.string() });

export type UpdateGearSchema = z.infer<typeof UpdateGearSchema>;
