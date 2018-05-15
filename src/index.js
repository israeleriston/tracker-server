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
  log('Server Listening on %o:%o', fastify.server.address().address, fastify.server.address().port)
})
