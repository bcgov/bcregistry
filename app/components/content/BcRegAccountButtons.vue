<script setup lang="ts">
import type { DropdownItem } from '#ui/types'
const keycloak = reactive(useKeycloak())
const { t } = useI18n()

const isSmallScreen = useMediaQuery('(max-width: 640px)')

const items = computed<DropdownItem[][]>(() => [
  [
    {
      label: 'n/a',
      slot: 'method',
      disabled: true
    }
  ],
  [
    {
      label: t('label.bcsc'),
      icon: 'i-mdi-account-card-details-outline',
      click: () => keycloak.login(IdpHint.BCSC)
    },
    {
      label: t('label.bceid'),
      icon: 'i-mdi-two-factor-authentication',
      click: () => keycloak.login(IdpHint.BCEID)
    },
    {
      label: t('label.idir'),
      icon: 'i-mdi-account-group-outline',
      click: () => keycloak.login(IdpHint.IDIR)
    }
  ]
])
</script>
<template>
  <ClientOnly>
    <div v-if="!keycloak.isAuthenticated" class="flex flex-col justify-center gap-4 sm:flex-row">
      <SbcAuthMenu :items :block="isSmallScreen" />
      <UButton
        :block="isSmallScreen"
        class="rounded-md px-6 py-3 font-semibold text-bcGovColor-header no-underline"
        label="Create a BC Registries Account"
        variant="outline"
        to="https://www.account.bcregistry.gov.bc.ca"
      />
    </div>
    <UButton
      v-else
      class="rounded-md bg-bcGovColor-header px-6 py-3 font-semibold no-underline"
      label="Go to BC Registries Dashboard"
      :block="isSmallScreen"
      to="https://www.bcregistry.gov.bc.ca/dashboard"
    />
  </ClientOnly>
</template>
