<script setup lang="ts">
definePageMeta({
  middleware: () => {
    const rtc = useRuntimeConfig().public
    const locale = useNuxtApp().$i18n.locale.value
    const registryLoginUrl = rtc.baseUrl + locale + '/login'
    const redirectUrl = sessionStorage.getItem('LOGOUT_URL') || registryLoginUrl

    return useKeycloak().logout(redirectUrl)
  }
})
</script>

<template>
  <div />
</template>
