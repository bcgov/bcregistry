<script setup lang="ts">
const isSmallScreen = useMediaQuery('(max-width: 640px)')
const localePath = useLocalePath()
</script>
<template>
  <div>
    <div v-if="!$keycloak.authenticated" class="flex flex-col justify-center gap-4 sm:flex-row">
      <SbcAuthMenu :block="isSmallScreen" />
      <UButton
        :block="isSmallScreen"
        class="font-bold text-midnightBlue-900 no-underline ring-midnightBlue-900 px-6 py-3"
        :label="$t('btn.createBCRegAccount')"
        variant="outline"
        :to="useRuntimeConfig().public.regAccountCreateURL"
      />
    </div>
    <UButton
      v-else
      class="px-6 py-3 bg-midnightBlue-900 font-bold"
      :label="$t('btn.goToBCRegDashboard')"
      :block="isSmallScreen"
      :to="localePath('/dashboard')"
    />
  </div>
</template>