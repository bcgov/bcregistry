<script setup lang="ts">
import type { DropdownItem } from '#ui/types'

defineProps<{
  block: boolean
  items: DropdownItem[][]
}>()
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
      class="rounded-md bg-bcGovColor-header px-6 py-3 font-semibold"
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
