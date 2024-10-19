<script setup lang="ts">
const keycloak = reactive(useKeycloak())
const { locale, t } = useI18n()
const { width } = useWindowSize()
const isSmallScreen = useMediaQuery('(max-width: 640px)')
const isLargeScreen = ref(false)
const config = useRuntimeConfig()
const localePath = useLocalePath()

useHead({
  title: t('page.ppr.title')
})

definePageMeta({
  order: 0
})

const featureCards = [
  {
    src: '/svgs/table-search.svg',
    title: t('page.ppr.section.features.cards.search.title'),
    description: t('page.ppr.section.features.cards.search.description')
  },
  {
    src: '/svgs/monitor-dashboard.svg',
    title: t('page.ppr.section.features.cards.records.title'),
    description: t('page.ppr.section.features.cards.records.description')
  },
  {
    src: '/svgs/account-circle.svg',
    title: t('page.ppr.section.features.cards.account.title'),
    description: t('page.ppr.section.features.cards.account.description')
  },
  {
    src: '/svgs/table-key.svg',
    title: t('page.ppr.section.features.cards.api.title'),
    description: t('page.ppr.section.features.cards.api.description')
  }
]

const helpfulLinks = [
  {
    title: t('page.ppr.section.helpfulLinks.cards.moreInfo.title'),
    src: '/svgs/file-document-box-search-icon.svg',
    description: t('page.ppr.section.helpfulLinks.cards.moreInfo.description'),
    link: {
      label: t('page.ppr.section.helpfulLinks.cards.moreInfo.link'),
      target: '_blank',
      href: 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/bc-registry-services-personal-property-registry'
    }
  },
  {
    title: t('page.ppr.section.helpfulLinks.cards.vehicle.title'),
    src: '/svgs/vehicle-claim-icon.svg',
    description: t('page.ppr.section.helpfulLinks.cards.vehicle.description'),
    link: {
      label: t('page.ppr.section.helpfulLinks.cards.vehicle.link'),
      target: '_blank',
      href: 'https://www.icbc.com/vehicle-registration/buy-vehicle/buy-a-used-vehicle/Vehicle-history-reports'
    }
  },
  {
    title: t('page.ppr.section.helpfulLinks.cards.legal.title'),
    src: '/svgs/legal-services-icon.svg',
    description: t('page.ppr.section.helpfulLinks.cards.legal.description'),
    link: {
      label: t('page.ppr.section.helpfulLinks.cards.legal.link'),
      target: '_blank',
      href: 'https://dyedurham.com/'
    }
  }
]

const { data: pprSections } = await useAsyncData(`ppr-sections-${locale.value}`, () => {
  return queryContent().where({ _locale: locale.value, _path: { $contains: 'ppr/sections' } }).find()
})

// srr safe media query
watchDebounced(width, () => {
  if (import.meta.client) {
    isLargeScreen.value = width.value > 1024
  }
}, { immediate: true, debounce: 100 })

setBreadcrumbs([
  { to: localePath('/'), label: t('labels.bcRegAndOLServices') },
  { label: t('labels.ppr') }
])
</script>
<template>
  <div>
    <PPRHeroBanner />

    <UContainer class="space-y-4 bg-gray-100 py-8 text-center lg:space-y-8 lg:py-20">
      <h2 class="text-3xl font-semibold text-bcGovColor-darkGray">
        {{ $t('page.ppr.section.features.title') }}
      </h2>

      <p class="text-bcGovColor-midGray">
        {{ $t('page.ppr.section.features.description') }}
      </p>

      <ul class="flex flex-col gap-4 md:flex-row">
        <PPRFeatureCard
          v-for="feat in featureCards"
          :key="feat.src"
          :src="feat.src"
          :title="feat.title"
          :description="feat.description"
        />
      </ul>
    </UContainer>

    <div class="bg-white">
      <UContainer class="flex flex-col py-10 lg:py-24">
        <!-- cant use clientonly because content wont render -->
        <PPRSection
          v-for="(section, i) in pprSections"
          :key="section._path"
          :content="section"
          :alternate="!isLargeScreen ? false : i % 2 !== 0"
        />
      </UContainer>
    </div>

    <div class="bg-gray-100">
      <UContainer class="space-y-10 py-10 text-center lg:py-24">
        <h3 class="text-2xl font-semibold">
          {{ $t('page.ppr.section.helpfulLinks.title') }}
        </h3>
        <ul class="flex flex-wrap justify-center gap-6">
          <PPRLinkCard v-for="item in helpfulLinks" :key="item.link.href" v-bind="item" />
        </ul>
      </UContainer>
    </div>

    <div class="bg-white">
      <UContainer class="space-y-6 py-10 text-center lg:py-24">
        <h3 class="text-3xl font-semibold">
          {{ $t('page.ppr.section.createAccount.title') }}
        </h3>
        <p>{{ $t('page.ppr.section.createAccount.description') }}</p>
        <div class="flex flex-col gap-4 lg:flex-row">
          <div class="prose prose-bcGov prose-li:list-[square] prose-li:m-0 prose-ul:pl-4 prose-h3:text-2xl prose-h4:text-2xl my-auto min-w-full flex-1 grow px-4 text-left marker:text-bcGovGray-500 sm:px-6 lg:min-w-[50%]">
            <h4>
              {{ $t('page.ppr.section.createAccount.list.1.title') }}
            </h4>
            <ul>
              <li>
                {{ $t('page.ppr.section.createAccount.list.1.li1') }}
              </li>
              <li>
                {{ $t('page.ppr.section.createAccount.list.1.li2') }}
              </li>
            </ul>
          </div>
          <div class="prose prose-bcGov prose-li:list-[square] prose-li:m-0 prose-ul:pl-4 prose-h3:text-2xl prose-h4:text-2xl my-auto min-w-full flex-1 grow px-4 text-left marker:text-bcGovGray-500 sm:px-6 lg:min-w-[50%]">
            <h4>
              {{ $t('page.ppr.section.createAccount.list.2.title') }}
            </h4>
            <ul>
              <i18n-t keypath="page.ppr.section.createAccount.list.2.li1.text" tag="li" scope="global">
                <template #link>
                  <a class="text-[#1a5a96] underline" target="_blank" :href="config.public.setupBCSCURL">
                    {{ $t('page.ppr.section.createAccount.list.2.li1.link') }}
                  </a>
                  <UIcon name="i-mdi-open-in-new" class="ml-1 text-[#1a5a96]" />
                </template>
              </i18n-t>
              <li>
                {{ $t('page.ppr.section.createAccount.list.2.li2') }}
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <ClientOnly>
            <UButton
              v-if="!keycloak.isAuthenticated"
              :label="$t('btn.createRegAccount')"
              size="bcGov"
              class="bg-bcGovColor-footer font-semibold"
              :to="config.public.authWebURL + 'choose-authentication-method'"
              :block="isSmallScreen"
            />
            <UButton
              variant="outline"
              :label="$t('btn.learnMore')"
              size="bcGov"
              class="font-semibold text-bcGovColor-footer"
              :to="config.public.setupBCSCURL"
              :block="isSmallScreen"
            />
          </ClientOnly>
        </div>
      </UContainer>
    </div>

    <PPRContactInfo />
  </div>
</template>
