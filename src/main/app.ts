import { BaseCustomError } from "@/core/errors/custom/base-custom-error";
import { ZodCustomError } from "@/core/errors/custom/zod-custom-error";
import fastify, { 
    FastifyBaseLogger, 
    FastifyInstance, 
    RawReplyDefaultExpression, 
    RawRequestDefaultExpression, 
    RawServerDefault } from "fastify";
import {
    validatorCompiler,
    serializerCompiler,
    type ZodTypeProvider
} from 'fastify-type-provider-zod'
import { ZodError } from "zod";


export type FastifyTypedInstance = FastifyInstance<
RawServerDefault,
RawRequestDefaultExpression,
RawReplyDefaultExpression,
FastifyBaseLogger,
ZodTypeProvider
>

const app = fastify() as FastifyTypedInstance

app.setErrorHandler((error, request, reply) => {
  if(error instanceof BaseCustomError) {

    return reply.status(error.statusCode).send({
      message: error.message,
      description: error.description.toValue(),
      tag: error.tag,
    })
  }

  if(error instanceof ZodError) {
    const zodCustomError = new ZodCustomError(error)

    return reply.status(zodCustomError.statusCode).send({
      message: zodCustomError.message,
      description: zodCustomError.description.toValue(),
      tag: zodCustomError.tag,
    })
  }

  console.log(error)
  reply.status((error as any)?.statusCode ?? 500).send({ message: (error as any).message ?? 'Internal server error' })
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

export { app };