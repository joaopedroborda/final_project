import z from 'zod'

export const ReadStudentsGearsLoansSchema = z.object({
    student_id: z.string(),
})
export type ReadStudentsGearsLoansSchema = z.infer<typeof ReadStudentsGearsLoansSchema>