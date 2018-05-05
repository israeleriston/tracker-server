import Fastify from 'fastify'
import boom from 'fastify-boom'
import formbody from 'fastify-formbody'
import jwt from 'fastify-jwt'
import auth from 'fastify-auth'
import helmet from 'fastify-helmet'
import registerRoutes from './routes'
const fastify = Fastify()

fastify.register(boom)
fastify.register(formbody)
fastify.register(jwt, { secret: process.env.SECRET_KEY || 'secretKey' })
fastify.register(auth)
fastify.register(helmet)

const server = () => {
  registerRoutes(fastify)
  return fastify
}

export default server
