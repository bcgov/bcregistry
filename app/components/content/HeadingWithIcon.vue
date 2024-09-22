<script setup lang="ts">
defineProps<{
  icon: string
  color: string
}>()
</script>
<template>
  <div class="flex w-full items-center justify-center gap-2 text-center">
    <UIcon
      :name="icon"
      class="size-6"
      :class="color"
    />
    <span>
      <slot />
    </span>
  </div>
</template>
