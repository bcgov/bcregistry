<script setup lang="ts">
definePageMeta({
  middleware: () => {
    const rtc = useRuntimeConfig().public
    const locale = useNuxtApp().$i18n.locale
    const registryDashboardUrl = rtc.baseUrl + locale + '/dashboard'
    const loginUrl = sessionStorage.getItem('LOGIN_URL') || registryDashboardUrl
    const url = rtc.authWebURL + 'signin/bcsc/' + encodeURIComponent(loginUrl)
    return navigateTo(url, { external: true })
  }
})
</script>

<template>
  <div />
</template>
