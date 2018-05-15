'use strict'

const formbody = require('fastify-formbody')

const install = server => {
  server.register(formbody)
}

module.exports = { install }
