<script setup lang="ts">
import type { Collections, 
  //CardsProductEnCACollectionItem 
} from '@nuxt/content'
const { locale } = useI18n()

const props = defineProps<{
  section: string
}>()

const collection = computed(() => `cards_product_${locale.value.replace('-', '')}` as keyof Collections)

const { data: cards } = await useAsyncData(`${props.section}-cards-${locale.value}`, () => {
  return queryCollection('home_product_cards_enCA')
    .where('path', 'LIKE', `%${props.section}%`)
    .all()
})
</script>
<template>
  <div class="flex flex-col app-inner-container">
    <div class="px-2 prose text-center min-w-full max-w-4xl">
      <slot name="header" />
    </div>
    <ul class="m-0 mx-auto flex list-square list-inside flex-wrap justify-center gap-4 md:gap-8 py-4 md:px-4 md:py-8">
      <SbcProductCard
        v-for="card in cards"
        :key="card.path"
        :content="card"
      />
    </ul>
    <div class="bg-blue-100 p-4 sm:px-2 sm:py-7 text-center">
      <div class="max-w-4xl mx-auto flex flex-col gap-4">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.prose :where(a){
  color: var(--color-bcGovGray-900);
  text-decoration: none;
  font-weight: 900
}

.prose :where(strong){
  color: var(--color-bcGovGray-900);
  font-weight: 900
}
</style>