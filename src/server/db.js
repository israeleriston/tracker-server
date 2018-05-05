const knexFile = require('../../knexfile')
const fastifyKnex = require('fastify-knexjs')

const db = knexFile[process.env.NODE_ENV || 'development']

const knex = server => server.register(fastifyKnex, { db })

export default knex
