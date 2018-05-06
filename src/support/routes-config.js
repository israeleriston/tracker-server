const makeRoutes = (routes, middleware, service) => {
  const routers = routes.map(route => createRoute(route, middleware, service))
  return routers
}

const createRoute = (route, Middleware, Service) =>
  route.service
    ? extractService(route, Middleware, Service)
    : extractMiddleware(route, Middleware)

const extractService = (route, middleware, Service) => ({
  ...route,
  handler: middleware[route.handler],
  service: route.service.map(service => Service[service])
})

const extractMiddleware = (route, middleware) => ({
  ...route,
  handler: middleware[route.handler]
})
module.exports = (routes, middleware, service) => makeRoutes(routes, middleware, service)
