import path from 'path'
import registerRoutes from 'fastify-register-routes'

const defaultPaht = path.resolve('src/http')

const routes = server => server.register(registerRoutes, { path: defaultPaht })

export default routes
