'use strict'

const auth = require('fastify-auth')

const install = server => {
  server.register(auth)
}

module.exports = { install }
