<script setup lang="ts">
onMounted(() => {
  const keycloak = useKeycloak()
  const { locale } = useI18n()
  const config = useRuntimeConfig().public

  const redirectUrl = sessionStorage.getItem('LOGOUT_URL') || `${config.baseURL}${locale.value}`

  keycloak.logout(redirectUrl)
})
</script>
<template>
  <ClientOnly>
    <ConnectSpinner overlay />
  </ClientOnly>
</template>
