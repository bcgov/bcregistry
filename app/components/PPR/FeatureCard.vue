<script setup lang="ts">
defineProps<{
  src: string
  title: string
  description: string
}>()
</script>
<template>
  <li class="list-none space-y-4 text-center">
    <img class="mx-auto pr-1" :src aria-hidden="true">
    <h4 class="font-semibold text-bcGovColor-darkGray">
      {{ title }}
    </h4>
    <p class="text-bcGovColor-midGray">
      {{ description }}
    </p>
  </li>
</template>
