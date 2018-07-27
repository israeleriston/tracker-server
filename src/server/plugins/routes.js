'use strict'

const path = require('path')
const registerRoutes = require('fastify-register-routes')

const defaultPath = path.join(__dirname, '../../domains')

const install = server => {
  server.register(registerRoutes, { path: defaultPath, useService: false })
}

module.exports = { install }
