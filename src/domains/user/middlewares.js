const find = (req, reply) => {
  req.logger('teste do debug porra! ')
  return reply.send({ 'Middleware.js ta vindo aqui !!': 'ok' })
}

module.exports = {
  find
}
