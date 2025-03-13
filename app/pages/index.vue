<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()

useHead({
  title: t('page.home.title')
})

definePageMeta({
  layout: 'home-page'
})

const accountTypeLinks = [
  { label: t('page.home.exploreByAccountType.bcRegAccount'), to: localePath('/#service-bc-connect-account') },
  { label: t('page.home.exploreByAccountType.bcOLAccount'), to: localePath('/#bc-online-account') },
  { label: t('page.home.exploreByAccountType.directAccount'), to: localePath('/#individual-direct-accounts') },
  { label: t('page.home.exploreByAccountType.noAccount'), to: localePath('/#account-not-required') }
]

const { data: homeSections } = await useAsyncData(`home-sections-${locale.value}`, () => {
  return queryCollection('home_sections_enCA')
    .all()
})

// watchEffect(() => console.log(homeSections.value))
</script>
<template>
  <div>
    <BCRegHero />
    <div class="flex flex-col items-center gap-2 md:gap-4 border-y-2 border-gray-300 bg-white px-2 py-4 md:px-4 md:py-8">
      <span
        class="text-lg font-semibold text-bcGovColor-darkGray"
        aria-hidden="true"
      >
        {{ $t('page.home.exploreByAccountType.title') }}
      </span>
      <nav :aria-label="$t('page.home.exploreByAccountType.title')" class="mx-auto w-full max-w-bcGovLg">
        <ul class="flex flex-col md:flex-row flex-wrap items-center justify-evenly">
          <li v-for="link in accountTypeLinks" :key="link.to" class="flex-1 md:border-gray-300 md:border-r last:border-none flex items-center justify-center py-1">
            <NuxtLink 
              :to="link.to"
              class="text-bcGovColor-markBlue font-bold underline focus-visible:outline-2 outline-offset-2 rounded-sm outline-bcGovColor-markBlue"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="px-2 py-4 md:px-4 md:py-8 max-w-bcGovLg mx-auto">
      <template v-if="homeSections?.length">
        <ContentRenderer
          v-for="section in homeSections"
          :key="section.id"
          :value="section"
          tag="section"
        />
      </template>
    </div>
    <BcrosContactInfo />
  </div>
</template>