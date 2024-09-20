<script setup lang="ts">
import type { DropdownItem } from '#ui/types'
const keycloak = reactive(useKeycloak())
const { t } = useI18n()

defineProps<{
  block: boolean
}>()

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
  <UDropdown
    id="logged-out-options-dropdown"
    :items
    :ui="{
      item: {
        base: 'group flex items-center gap-4 w-full',
        disabled: 'cursor-default opacity-100',
        icon: {
          base: 'flex-shrink-0 size-6',
          active: 'text-gray-500 dark:text-gray-400',
          inactive: 'text-bcGovColor-midGray',
        },
      }
    }"
  >
    <!-- login button on large screens -->
    <UButton
      class="bg-bcGovColor-header font-semibold"
      size="bcGov"
      label="Log in to my BC Registries Account"
      :block
      :aria-label="$t('label.selectLoginMethod')"
      icon="i-mdi-caret-down"
      trailing
    />

    <template #method>
      <span class="font-semibold text-bcGovColor-darkGray"> {{ $t('label.selectLoginMethod') }} </span>
    </template>
  </UDropdown>
</template>
