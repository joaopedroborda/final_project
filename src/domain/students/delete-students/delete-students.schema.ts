import z from 'zod'

export const DeleteStudentSchema = z.object({
  id: z.string()
})

export type DeleteStudentSchema = z.infer<typeof DeleteStudentSchema>