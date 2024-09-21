<script setup lang="ts">
const keycloak = reactive(useKeycloak())
const isSmallScreen = useMediaQuery('(max-width: 640px)')
const localePath = useLocalePath()
</script>
<template>
  <ClientOnly>
    <div v-if="!keycloak.isAuthenticated" class="flex flex-col justify-center gap-4 sm:flex-row">
      <SbcAuthMenu :block="isSmallScreen" />
      <UButton
        :block="isSmallScreen"
        size="bcGov"
        class="font-semibold text-bcGovColor-footer no-underline"
        label="Create a BC Registries Account"
        variant="outline"
        :to="useRuntimeConfig().public.regAccountCreateURL"
      />
    </div>
    <UButton
      v-else
      size="bcGov"
      class="bg-bcGovColor-header font-semibold no-underline"
      label="Go to BC Registries Dashboard"
      :block="isSmallScreen"
      :to="localePath('/dashboard')"
    />
  </ClientOnly>
</template>
