import server from './server'

const fastify = server()

fastify.listen(process.env.PORT || 3000, '127.0.0.1', err => {
  if (err) throw err
  console.log(`Server listening on ${fastify.server.address().port}`)
})
