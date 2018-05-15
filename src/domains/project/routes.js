'use strict'

const middleware = require('./middlewares')
const service = require('./service')

const routes = [
  { name: 'project-find',
    method: 'get',
    path: '/project',
    handler: middleware.find,
    service: [ service.find, service.getOne ]
  }
]

module.exports = routes
