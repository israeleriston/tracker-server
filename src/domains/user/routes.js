'use strict'

const middleware = require('./middlewares')
const service = require('./service')

const routes = [
  { method: 'get',
    path: '/user',
    handler: middleware.find,
    service: [ service.find, service.getOne ]
  }
]
// console.log('routes loaded! ', routes)

module.exports = routes
