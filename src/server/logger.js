const fp = require('fastify-plugin')
const logger = require('debug')('App:Http')

function install (instance, options, next) {
  instance.decorateRequest('logger', logger)
  next()
}

module.exports = fp(install, {
  fastify: '>=1.0.0',
  name: 'fastify-logger-onrequest'
})
