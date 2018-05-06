
'use strict'

const boom = require('fastify-boom')
const formbody = require('fastify-formbody')
const jwt = require('fastify-jwt')
const auth = require('fastify-auth')
const helmet = require('fastify-helmet')
const logger = require('./logger')
const split = require('split2')
const stream = split(JSON.parse)
const fastify = require('fastify')({
  logger: {
    level: 'info',
    stream: stream
  }
})

const registerRoutes = require('./routes')

fastify.register(boom)
fastify.register(formbody)
fastify.register(jwt, { secret: process.env.SECRET_KEY || 'secretKey' })
fastify.register(auth)
fastify.register(helmet)
fastify.register(logger)

const server = () => {
  registerRoutes(fastify)
  return fastify
}

module.exports = server
