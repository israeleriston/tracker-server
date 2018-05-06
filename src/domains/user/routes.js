'use strict'

const middleware = require('./middlewares')
const service = require('./service')
const schema = require('./schemes')

console.log('schemes', schema)

const routes = [
  { method: 'get',
    path: '/user',
    schema: schema.create,
    handler: middleware.find,
    service: [ service.find, service.getOne ]
  }
]
// console.log('routes loaded! ', routes)

module.exports = routes
