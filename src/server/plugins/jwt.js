'use strict'

const jwt = require('fastify-jwt')

const install = server => {
  server.register(jwt, { secret: process.env.SECRET_KEY || 'secretKey' })
}

module.exports = { install }
