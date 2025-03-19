<script setup lang="ts">
definePageMeta({
  middleware: () => {
    const rtc = useRuntimeConfig().public
    return navigateTo(rtc.supportFilingUrl, { external: true })
  }
})
</script>

<template>
  <div />
</template>
