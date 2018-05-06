const find = (req, reply) => {
  console.log('Middleware')
  return reply.send({ 'Middleware.js': 'ok' })
}

module.exports = {
  find
}
