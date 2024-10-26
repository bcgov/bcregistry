<script setup lang="ts">
definePageMeta({
  path: '/signin/:slug'
})

onMounted(async () => {
  const route = useRoute()
  const config = useRuntimeConfig().public
  const keycloak = reactive(useKeycloak())
  const localePath = useLocalePath()
  const { locale } = useI18n()

  if (keycloak.isAuthenticated) {
    await navigateTo(localePath('/dashboard'))
  } else {
    const sessionLoginUrl = sessionStorage.getItem('LOGIN_URL')
    const loginUrl = sessionLoginUrl || `${config.baseURL}${locale.value}/dashboard`
    const slug = route.params.slug as IdpHint | undefined

    if (slug && [IdpHint.BCEID, IdpHint.BCSC, IdpHint.IDIR].includes(slug)) {
      keycloak.login(slug, loginUrl)
    } else {
      await navigateTo('/login')
    }
  }
})
</script>
<template>
  <ClientOnly>
    <ConnectSpinner overlay />
  </ClientOnly>
</template>
