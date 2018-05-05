const fastify = require('fastify')()
const boom = require('fastify-boom')
const formbody = require('fastify-formbody')
const jwt = require('fastify-jwt')
const auth = require('fastify-auth')
const helmet = require('fastify-helmet')

const registerRoutes = require('./routes')

fastify.register(boom)
fastify.register(formbody)
fastify.register(jwt, { secret: process.env.SECRET_KEY || 'secretKey' })
fastify.register(auth)
fastify.register(helmet)

const server = () => {
  registerRoutes(fastify)
  return fastify
}

module.exports = server
