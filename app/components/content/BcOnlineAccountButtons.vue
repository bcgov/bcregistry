<script setup lang="ts">
const isSmallScreen = useMediaQuery('(max-width: 640px)')
</script>
<template>
  <UButton
    class="rounded-md bg-bcGovColor-header px-6 py-3 font-semibold no-underline"
    label="Log in to my BC OnLine Account"
    :block="isSmallScreen"
    :to="useRuntimeConfig().public.bcolURL"
  />
</template>
