import z from 'zod'

import { GearsLoanSchema } from '../gears-loan-schema'

export const CreateGearsLoanSchema = GearsLoanSchema.omit({
    id: true,
})

export type CreateGearsLoanSchema = z.infer<typeof CreateGearsLoanSchema>