<script setup lang="ts">
const productStore = useUserProductsStore()
const { t } = useI18n()

useHead({
  title: t('page.dashboard.title')
})

const helpHref = 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/news-updates/modernization-updates/modernization-resources'

onMounted(async () => {
  await productStore.getUserProducts()
})
</script>
<template>
  <UContainer class="py-6 sm:py-12">
    <h1 class="text-[32px] font-semibold text-bcGovColor-darkGray">
      {{ $t('page.dashboard.h1') }}
    </h1>
    <p class="pt-3 text-bcGovColor-midGray">
      {{ $t('page.dashboard.intro') }}
    </p>
    <h3 class="pb-4 pt-6 text-lg text-bcGovColor-darkGray  sm:pt-12">
      <SbcI18nBold translation-path="page.dashboard.products.heading" :count="productStore.userProducts.length" />
    </h3>
    <div v-if="!productStore.loading" class="flex flex-col gap-6 lg:flex-row">
      <ul
        :aria-label="$t('page.dashboard.products.heading', { count: productStore.userProducts.length })"
        class="flex flex-col gap-6"
      >
        <DashboardUserProduct
          v-for="product in productStore.userProducts"
          :key="product.link"
          :product
        />
      </ul>
      <div class="space-y-6">
        <UCard class="pointer-events-none shadow-none lg:w-72 xl:w-96 2xl:w-[420px]">
          <div class="space-y-4">
            <h5 class="font-semibold text-bcGovColor-darkGray">
              {{ $t('page.dashboard.help.addProds.title') }}
            </h5>
            <p class="text-sm text-bcGovColor-midGray">
              {{ $t('page.dashboard.help.addProds.p1') }}
            </p>
          </div>
        </UCard>
        <UCard
          class="cursor-pointer border-blue-500 shadow-none focus-within:border-2 lg:w-72 xl:w-96 2xl:w-[420px]"
          @click="() => navigateTo(helpHref, { external: true, open: { target: '_blank' }})"
        >
          <div class="flex flex-col gap-4">
            <h5 class="font-semibold text-bcGovColor-darkGray">
              {{ $t('page.dashboard.help.howToUse.title') }}
            </h5>
            <p class="text-sm text-bcGovColor-midGray">
              {{ $t('page.dashboard.help.howToUse.p1') }}
            </p>
            <span>
              <a
                class="text-sm font-semibold text-blue-500 focus:outline-none"
                :href="helpHref"
                target="_blank"
              >
                {{ $t('page.dashboard.help.howToUse.link') }}
              </a>
              <span class="inline-flex align-middle">
                <UIcon
                  name="i-mdi-open-in-new"
                  class="ml-1 size-4 text-blue-500"
                />
              </span>
            </span>
          </div>
        </UCard>
      </div>
    </div>
    <ClientOnly v-else>
      <SbcLoadingSpinner overlay />
    </ClientOnly>
  </UContainer>
</template>
