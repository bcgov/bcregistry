<script setup lang="ts">
const props = defineProps<{
  title: string
  src: string
  description: string
  link: {
    label: string
    target: string
    href: string
  }
}>()

function goToItem () {
  return navigateTo(props.link.href, {
    open: {
      target: props.link.target
    }
  })
}
</script>
<template>
  <li
    data-testid="ppr-link-card"
    class="flex max-w-[300px] cursor-pointer flex-col items-center justify-center gap-6 rounded bg-white px-5 py-8 text-center shadow-md transition-transform focus-within:-translate-y-1 focus-within:ring-2 focus-within:ring-bcGovGray-500 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-bcGovGray-500 dark:border dark:border-gray-300/50 dark:bg-bcGovColor-darkGray dark:focus-within:ring-1 dark:focus-within:ring-bcGovGray-100 dark:hover:ring-1 dark:hover:ring-bcGovGray-100"
    @click="goToItem"
  >
    <a
      :href="link.href"
      class="text-lg font-semibold text-bcGovColor-darkGray no-underline focus:outline-none"
      :target="link.target"
    >
      {{ title }}
    </a>
    <img class="mx-auto" :src aria-hidden="true">
    <p>{{ description }}</p>
    <div class="mt-auto px-4 pb-4 text-left sm:px-6">
      <span class="flex flex-wrap items-center whitespace-nowrap font-semibold tracking-wide text-[#1a5a96] underline dark:text-white">
        <span>
          {{ link.label }}
          <span class="inline-flex align-middle">
            <UIcon
              name="i-mdi-open-in-new"
              class="ml-1 size-5"
            />
          </span>
        </span>
      </span>
    </div>
  </li>
</template>
