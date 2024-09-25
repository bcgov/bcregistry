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
      container: 'min-w-fit',
      padding: 'py-3 px-0',
      item: {
        rounded: 'rounded-none',
        base: 'flex items-center gap-4 w-full hover:text-bcGovColor-activeBlue hover:bg-bcGovColor-gray1',
        padding: 'px-4 py-3',
        disabled: 'cursor-default opacity-100 hover:bg-white py-0',
        icon: {
          base: 'flex-shrink-0 size-5 text-bcGovColor-activeBlue',
          active: 'text-bcGovColor-activeBlue',
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
      <span class="whitespace-nowrap font-semibold text-bcGovColor-darkGray"> {{ $t('label.selectLoginMethod') }} </span>
    </template>
  </UDropdown>
</template>
