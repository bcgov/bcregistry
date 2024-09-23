<script setup lang="ts">
const props = defineProps<{
  product: Product
}>()

function goToItem () {
  return navigateTo(props.product.link, { external: true })
}
</script>
<template>
  <UCard :ui="{ base: 'border-l-[3px] border-transparent hover:border-blue-500 focus-within:border-blue-500 cursor-pointer' }">
    <li
      class="flex flex-col gap-6 sm:flex-row sm:gap-8"
      @click="goToItem"
    >
      <img
        v-if="product.image"
        class="mx-auto h-[183px] w-[244px]"
        :src="`/${product.image}`"
      >
      <div class="flex flex-col justify-between">
        <div class="space-y-4 pb-4">
          <a
            :href="product.link"
            :aria-describedby="product.text"
            class="text-2xl font-semibold text-bcGovColor-darkGray no-underline focus:outline-none"
          >
            {{ product.title }}
          </a>
          <p class="text-lg text-bcGovColor-midGray">
            {{ product.text }}
          </p>
        </div>
        <UButton
          tabindex="-1"
          label="Open"
          class="pointer-events-none self-start px-5 py-3"
          trailing
          icon="i-mdi-chevron-right"
        />
      </div>
    </li>
  </UCard>
</template>
