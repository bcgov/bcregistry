<script setup lang="ts">
const connectNav = reactive(useConnectNav())

defineProps<{
  block: boolean
}>()
</script>
<template>
  <UDropdown
    id="logged-out-options-dropdown"
    :items="connectNav.loggedOutUserOptions"
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
    <UButton
      class="bg-bcGovColor-header font-semibold"
      size="bcGov"
      :label="$t('btn.loginBCREGAccount')"
      :block
      icon="i-mdi-caret-down"
      trailing
    />

    <template #method>
      <span class="font-semibold text-bcGovColor-darkGray"> {{ $t('label.selectLoginMethod') }} </span>
    </template>
  </UDropdown>
</template>
