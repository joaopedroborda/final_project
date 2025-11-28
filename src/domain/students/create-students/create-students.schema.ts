import z from 'zod'

<<<<<<< HEAD
import { StudentSchema } from '../students-schema'

export const CreateStudentSchema = StudentSchema.omit({
=======
import { studentSchema } from '../students-schema'

export const CreateStudentSchema = studentSchema.omit({
>>>>>>> 6168fce2a95b413142af33dfd3d149efe2c85e7f
	id: true,
})

export type CreateStudentSchema = z.infer<typeof CreateStudentSchema>