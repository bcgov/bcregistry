<script setup lang="ts">
const { loggedOutUserOptions } = useConnectNav()
</script>
<template>
  <UDropdownMenu
    :items="loggedOutUserOptions"
  >
    <UButton
      :label="$t('btn.loginSbcAccount')"
      icon="i-mdi-caret-down"
      trailing
      class="rounded-sm px-6 py-3 bg-midnightBlue-900 font-bold"
    />
  </UDropdownMenu>
</template>