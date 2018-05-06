const find = (req, reply) => {
  return reply.send({ 'Middleware.js ta vindo aqui !!': 'ok' })
}

module.exports = {
  find
}
