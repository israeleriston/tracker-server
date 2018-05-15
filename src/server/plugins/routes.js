'use strict'

const path = require('path')
const registerRoutes = require('fastify-register-routes')

const defaultPaht = path.join(__dirname, '../../domains')

const install = server => {
  server.register(registerRoutes, { path: defaultPaht, useService: false })
}

module.exports = { install }
