const knexFile = require('../../../knexfile')
const knex = require('knex')

const db = knex(knexFile[process.env.NODE_ENV || 'development'])

const install = server => {
  server.decorateRequest('db', db)
}

module.exports = { install }
