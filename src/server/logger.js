const fp = require('fastify-plugin')

const makeLoger = color => {
  const logger = require('debug')('App:http')
  logger.color = color
  return logger
}

function install (instance, options, next) {
  instance.decorateRequest('logger', {
    info: makeLoger(4),
    trace: makeLoger(7),
    error: makeLoger(1),
    warn: makeLoger(3),
    log: makeLoger(2)
  })
  next()
}

module.exports = fp(install, {
  fastify: '>=1.0.0',
  name: 'fastify-logger-onrequest'
})
