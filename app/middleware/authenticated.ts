export default defineNuxtRouteMiddleware((from) => {
  if (import.meta.client) {
    const { isAuthenticated, setLoginRedirectUrl } = useKeycloak()
    const localePath = useLocalePath()

    if (!isAuthenticated.value) {
      setLoginRedirectUrl(location.origin + from.fullPath)

      return navigateTo(localePath('/auth/signin'))
    }
  }
})
