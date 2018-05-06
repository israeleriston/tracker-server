const createRoute = (router) => (route) =>
  (route.middlware)
    ? router[ route.method ](route.path, ...route.middlware, route.action)
    : router[ route.method ](route.path, route.action)

const createRoutes = (routes, router) => {
  routes.map(createRoute(router))
  return router
}

module.exports = createRoutes
