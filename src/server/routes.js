const path = require('path')
const registerRoutes = require('fastify-register-routes')

const defaultPaht = path.join(__dirname, '../domains')

const routes = server => server.register(registerRoutes, { path: defaultPaht })

module.exports = routes
