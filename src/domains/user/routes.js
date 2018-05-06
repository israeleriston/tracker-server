const makeRoutes = require('./helpers')

const config = [
  { method: 'get',
    path: '/user',
    handler: 'find',
    service: [ 'find', 'getOne' ]
  }
]
const routes = makeRoutes(config)

module.exports = routes
