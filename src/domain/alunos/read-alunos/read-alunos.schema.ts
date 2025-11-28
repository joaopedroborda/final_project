import z from 'zod'

export const CreateStudentSchema = z.string({
    id: z.string(),
})

export type CreateStudentSchema = z.infer<typeof CreateStudentSchema>