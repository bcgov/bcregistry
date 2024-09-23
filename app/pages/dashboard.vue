<script setup lang="ts">
const productStore = useUserProductsStore()

const helpHref = 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/news-updates/modernization-updates/modernization-resources'

onMounted(async () => {
  await productStore.getUserProducts()
})
</script>
<template>
  <UContainer class="py-6 sm:py-12">
    <h1 class="text-[32px] font-semibold text-bcGovColor-darkGray">
      BC Registries Dashboard
    </h1>
    <p class="pt-3 text-bcGovColor-midGray">
      Access to your BC Registries account product and services
    </p>
    <h3 class="pb-4 pt-6 text-lg font-semibold text-bcGovColor-darkGray  sm:pt-12">
      My Products and Services ({{ productStore.userProducts.length }})
    </h3>
    <div v-if="!productStore.loading" class="flex flex-col gap-6 lg:flex-row">
      <ul
        :aria-label="`My Products and Services (${productStore.userProducts.length})`"
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
              Add Products and Services
            </h5>
            <p class="text-sm text-bcGovColor-midGray">
              To request access to additional products and services, contact the account Administrator of your BC Registries account.
            </p>
          </div>
        </UCard>
        <UCard
          class="cursor-pointer border-blue-500 shadow-none focus-within:border-2 lg:w-72 xl:w-96 2xl:w-[420px]"
          @click="() => navigateTo(helpHref, { external: true, open: { target: '_blank' }})"
        >
          <div class="flex flex-col gap-4">
            <h5 class="font-semibold text-bcGovColor-darkGray">
              Help with How to Use BC Registries Products and Services
            </h5>
            <p class="text-sm text-bcGovColor-midGray">
              Learn about the registries and how to use the applications through step-by-step guides,
              online videos, and downloadable quick guides.
            </p>
            <span>
              <a
                class="text-sm font-semibold text-blue-500 focus:outline-none"
                :href="helpHref"
                target="_blank"
              >
                Go to the Registry Application Help Page
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
