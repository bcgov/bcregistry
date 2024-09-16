<script setup lang="ts">
const { locale } = useI18n()

const props = defineProps<{
  path: string
}>()

const { data: content } = await useAsyncData(`${props.path}-content-${locale.value}`, () => {
  return queryContent().where({ _locale: locale.value, _path: { $contains: props.path }, _dir: { $ne: 'cards' } }).findOne()
})
</script>
<template>
  <div class="py-8 sm:py-16">
    <ContentRenderer :value="content" />
  </div>
</template>
