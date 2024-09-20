<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
// const localePath = useLocalePath()
const props = defineProps<{
  content: ParsedContent | undefined
}>()

function goToItem () {
  if (props.content?.link !== undefined) {
    return navigateTo(props.content?.link?.href, {
      open: {
        target: props.content?.link?.target === 'blank' ? '_blank' : '_self'
      }
    })
  }
}

const badgeMovedStyle = 'before:content-[""] before:absolute before:inset-0 before:bg-gray-200 before:bg-opacity-25 before:z-10'
const hasLinkStyle = 'cursor-pointer transition-transform focus-within:-translate-y-1 focus-within:ring-2 focus-within:ring-bcGovGray-500 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-bcGovGray-500 dark:border dark:border-gray-300/50 dark:bg-bcGovColor-darkGray dark:focus-within:ring-1 dark:focus-within:ring-bcGovGray-100 dark:hover:ring-1 dark:hover:ring-bcGovGray-100'
</script>
<template>
  <!-- eslint-disable -->
  <li
    data-testid="product-card"
    class="relative flex max-w-[390px] flex-col overflow-hidden rounded bg-white shadow-md"
    :class="[content?.link ? hasLinkStyle : '', content?.badge === 'MOVED' ? badgeMovedStyle : '']"
    @click="goToItem"
  >
    <div class="z-0 relative flex w-[105%] -ml-2 items-center bg-blue-350 px-4 py-3.5 font-semibold tracking-wide text-white lg:px-7 dark:border-b dark:border-gray-300/50 dark:bg-bcGovColor-darkGray">
      <a
        v-if="content?.link"
        :href="content?.link?.href"
        class="text-left font-semibold text-white no-underline focus:outline-none"
        :class="{ 'w-4/5': content?.badge }"
      >
        {{ content?.name }}
      </a>
      <span v-else>{{ content?.name }}</span>
      <span v-if="content?.badge" class="absolute right-2 top-0 rounded-b bg-bcGovColor-navDivider px-2 py-1 text-sm text-blue-600 sm:right-7">{{ content?.badge }}</span>
    </div>
    <div class="grow prose prose-bcGov text-left prose-li:list-[square] prose-li:font-semibold marker:text-bcGovGray-500 prose-li:m-0 px-4 sm:px-6 prose-ul:pl-4">
      <ContentRenderer :value="content" />
    </div>
    <div v-if="content?.link" class="px-4 sm:px-6 pb-4 text-left">
      <span class="flex flex-wrap items-center font-semibold tracking-wide text-[#1a5a96] underline dark:text-white">
        <span>
          {{ content?.link?.label }}
          <span class="inline-flex align-middle">
            <UIcon
              :name="content?.link?.target === 'blank' ? 'i-mdi-open-in-new' : 'i-mdi-arrow-right-thin'"
              class="ml-1 size-5"
            />
          </span>
        </span>
      </span>
    </div>
  </li>
</template>
