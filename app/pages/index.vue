<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { setLoginRedirectUrl, setLogoutRedirectUrl } = useKeycloak()
useHead({
  title: t('page.home.title')
})

definePageMeta({
  order: 0
})

const homeItems = [
  'home/bc-reg-account',
  'home/bc-online-account',
  'home/individual-direct-accounts',
  'home/accounts-not-required'
]

setBreadcrumbs([
  { label: t('ConnectBreadcrumb.default') }
])

onMounted(() => {
  const config = useRuntimeConfig().public
  // if user logs in from this page, go to dashboard
  setLoginRedirectUrl(`${config.baseURL}${locale.value}/dashboard`)
  // if user logs out from this page, return here
  setLogoutRedirectUrl(`${config.baseURL}${locale.value}`)
  // siteminder url to clear cookie
  setSiteMinderLogoutUrl()
})
</script>
<template>
  <div>
    <BCRegHeroBanner class="px-2 xl:px-0" />
    <div class="flex flex-col items-center gap-4 border-y-2 border-gray-300 bg-white px-4 py-8">
      <span
        class="text-lg font-semibold text-bcGovColor-darkGray"
        aria-hidden="true"
      >
        {{ $t('page.home.exploreByAccountType.title') }}
      </span>
      <UHorizontalNavigation
        :aria-label="$t('page.home.exploreByAccountType.title')"
        class="mx-auto"
        :links="[
          { label: $t('page.home.exploreByAccountType.bcRegAccount'), to: localePath('/#bc-registries-account') },
          { label: $t('page.home.exploreByAccountType.bcOLAccount'), to: localePath('/#bc-online-account') },
          { label: $t('page.home.exploreByAccountType.directAccount'), to: localePath('/#individual-direct-accounts') },
          { label: $t('page.home.exploreByAccountType.noAccount'), to: localePath('/#account-not-required') },
        ]"
        :ui="{
          strategy: 'override',
          active: '',
          label: 'font-semibold text-[#1a5a96] underline text-base truncate relative',
          inner: 'min-w-0 py-1 px-4 py-1 sm:px-6 md:px-10 lg:px-16',
          container: 'flex flex-wrap items-center min-w-0 divide-x divide-gray-300',
          base: 'group relative w-full flex items-center gap-1.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75'
        }"
      />
    </div>
    <div class="mx-auto max-w-bcGovLg divide-y-[3px] divide-gray-300">
      <SbcPageSectionLanding v-for="item in homeItems" :key="item" :path="item" />
    </div>
    <BcrosContactInfo />
  </div>
</template>
