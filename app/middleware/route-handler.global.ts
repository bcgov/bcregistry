export default defineNuxtRouteMiddleware((to) => {
  // Check if the route starts with /login but doesn't have the locale prefix
  if (to.path.startsWith('/login') && !to.path.startsWith('/en-CA/login') && !to.path.startsWith('/fr-CA/login')) {
    // Get all query parameters
    const query = { ...to.query }

    // Create the redirect URL with the same query parameters
    return navigateTo({
      path: '/en-CA/login',
      query: query
    })
  }
})
