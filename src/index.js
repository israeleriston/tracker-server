'use strict'
const log = require('debug')('App')
const base = require('app-module-path')
const server = require('./server')

base.addPath(__dirname)

const fastify = server()

fastify.listen(process.env.PORT || 3000, err => {
  if (err) {
    throw err
  }
  log('server listening on %s:%s', fastify.server.address().address, fastify.server.address().port)
})
