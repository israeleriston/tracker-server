'use strict'

const makeLoger = color => {
  const logger = require('debug')('App:http')
  logger.color = color
  return logger
}

const install = server => {
  server.decorateRequest('logger', {
    info: makeLoger(4),
    trace: makeLoger(7),
    error: makeLoger(1),
    warn: makeLoger(3),
    log: makeLoger(2)
  })
}

module.exports = { install }
