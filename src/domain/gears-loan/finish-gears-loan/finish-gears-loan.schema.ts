import z from 'zod'

export const DeleteGearsLoanSchema = z.object({
  id: z.string()
})

export type DeleteGearsLoanSchema = z.infer<typeof DeleteGearsLoanSchema>