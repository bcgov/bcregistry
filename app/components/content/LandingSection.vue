<script setup lang="ts">
const { locale } = useI18n()

const props = defineProps<{
  path: string
}>()

const { data: cards } = await useAsyncData(`${props.path}-cards-${locale.value}`, () => {
  return queryContent().where({ _locale: locale.value, _path: { $contains: props.path }, _dir: { $eq: 'cards' } }).find()
})
</script>
<template>
  <div class="prose prose-bcGov prose-h2:mt-0 prose-h3:m-0 flex min-w-full flex-col text-center">
    <div class="px-2">
      <slot name="header" />
    </div>
    <ul class="m-0 mx-auto flex list-none flex-wrap justify-center gap-8 px-2 pb-10 pt-6">
      <SbcProductCard
        v-for="card in cards"
        :key="card._path"
        :content="card"
      />
    </ul>
    <div class="bg-blue-100 px-2 py-7">
      <slot name="footer" />
    </div>
  </div>
</template>
