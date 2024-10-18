export default defineNuxtRouteMiddleware(() => {
  if (import.meta.client) {
    const accountStore = useConnectAccountStore()
    const config = useRuntimeConfig().public

    if (accountStore.isStaffOrSbcStaff) {
      return navigateTo(config.businessRegistryStaffDashboard, { external: true })
    }
  }
})
