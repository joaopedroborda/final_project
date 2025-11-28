import z from 'zod'
<<<<<<<< HEAD:src/domain/students/update-students/update-students.schema.ts
import { StudentSchema } from '../students-schema'
========
import { studentSchema } from '../students-schema'
>>>>>>>> 6168fce2a95b413142af33dfd3d149efe2c85e7f:src/domain/students/update-alunos/update-alunos.schema.ts

export const UpdateStudentSchema = StudentSchema.omit({
	id: true,
}).partial().extend({ id: z.string() })

export type UpdateStudentSchema = z.infer<typeof UpdateStudentSchema>