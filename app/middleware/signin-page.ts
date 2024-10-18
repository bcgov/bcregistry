export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.client) {
    const { isAuthenticated } = useKeycloak()
    const localePath = useLocalePath()

    if (isAuthenticated.value && to.path === localePath('/auth/signin')) {
      return navigateTo(localePath('/'))
    }
  }
})
