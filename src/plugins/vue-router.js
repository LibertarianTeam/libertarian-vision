export default {
  extendRoutes(routes, resolve) {
    routes.forEach((route) => {
      if (route.name === 'index') route.alias = ['/home']
    })
  }
}
