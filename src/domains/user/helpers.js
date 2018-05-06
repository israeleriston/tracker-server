const middleware = require('./middlewares')
const service = require('./service')
const makeRoutes = require('../../support/routes-config')

module.exports = routes => makeRoutes(routes, middleware, service)
