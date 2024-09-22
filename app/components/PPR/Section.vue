<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
defineProps<{
  content: ParsedContent | undefined
  alternate: boolean
}>()
</script>
<template>
  <section
    :class="[
      'flex lg:h-[450px]',
      alternate ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'
    ]"
  >
    <div
      class="min-h-[340px] flex-1 bg-contain bg-center bg-no-repeat"
      :class="content?.bgImage"
    />
    <article class="prose prose-bcGov prose-li:list-[square] prose-li:m-0 prose-ul:pl-4 prose-h3:text-2xl prose-h3:mt-0 my-auto min-w-full flex-1 grow px-4 py-8 text-left marker:text-bcGovGray-500 sm:px-6 lg:min-w-[50%]">
      <ContentRenderer :value="content" />
    </article>
  </section>
</template>
