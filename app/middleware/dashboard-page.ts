export default defineNuxtRouteMiddleware(() => {
  const accountStore = useConnectAccountStore()
  const rtc = useRuntimeConfig().public

  if (accountStore.isStaffOrSbcStaff) {
    return navigateTo(rtc.businessRegistryStaffDashboard, { external: true })
  }
})
