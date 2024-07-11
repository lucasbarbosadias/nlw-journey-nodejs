import type { FastifyInstance } from 'fastify'
import { ClientError } from './errors/client-error'
import { ZodError } from 'zod'

type fastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: fastifyErrorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Invalid input',
      error: error.flatten().fieldErrors
    })
  }

  if (error instanceof ClientError) {
    return reply.status(400).send({
      message: error?.message
    })
  }

  return reply.status(500).send({
    message: 'Internal Server Error'
  })
}