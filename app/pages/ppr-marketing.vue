<script setup lang="ts">
const keycloak = reactive(useKeycloak())
const { locale } = useI18n()
const isSmallScreen = useMediaQuery('(max-width: 640px)')
const config = useRuntimeConfig()

useHead({
  title: 'BC Personal Property Registry'
})

definePageMeta({
  order: 0,
  layout: 'bcreghome'
})

const featureCards = [
  {
    src: '/svgs/table-search.svg',
    title: 'User Friendly Tools',
    description: 'A new, easy-to-use application that offers improved searching and registering.'
  },
  {
    src: '/svgs/monitor-dashboard.svg',
    title: 'Organized Records',
    description: 'Registrations, searches and downloadable documents are saved to your dashboard.'
  },
  {
    src: '/svgs/account-circle.svg',
    title: 'Account Integration',
    description: 'Access to all of your BC Registries products and services from one location.'
  },
  {
    src: '/svgs/table-key.svg',
    title: 'API Services',
    description: 'Are you a high-volume account user? Ask about our Personal Property Registry APIs.'
  }
]

const helpfulLinks = [
  {
    title: 'More Information',
    src: '/svgs/file-document-box-search-icon.svg',
    description: 'Find detailed information about the Personal Property Registry.',
    link: {
      label: 'Learn More',
      target: '_blank',
      href: 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/bc-registry-services-personal-property-registry'
    }
  },
  {
    title: 'VEHICLE CLAIMS REPORT',
    src: '/svgs/vehicle-claim-icon.svg',
    description: 'Vehicle claim history reports are available from ICBC and Carfax.',
    link: {
      label: 'Order a Report',
      target: '_blank',
      href: 'https://www.icbc.com/vehicle-registration/buy-vehicle/buy-a-used-vehicle/Vehicle-history-reports'
    }
  },
  {
    title: 'Legal Services',
    src: '/svgs/legal-services-icon.svg',
    description: 'Get professional support filling out forms and filling documents.',
    link: {
      label: 'Contact Dye & Durham',
      target: '_blank',
      href: 'https://dyedurham.com/'
    }
  }
]

const { data: pprSections } = await useAsyncData(`ppr-sections-${locale.value}`, () => {
  return queryContent().where({ _locale: locale.value, _path: { $contains: 'ppr/sections' } }).find()
})
</script>
<template>
  <div>
    <PPRHeroBanner />

    <UContainer class="space-y-4 bg-gray-100 py-8 text-center lg:space-y-8 lg:py-20">
      <h2 class="text-3xl font-semibold text-bcGovColor-darkGray">
        A Modern Personal Property Registry for B.C.
      </h2>

      <p class="text-bcGovColor-midGray">
        The Personal Property Registry is now one of BC Registries and Online
        Services' new modernized applications.
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
        <PPRSection
          v-for="(section, i) in pprSections"
          :key="section._path"
          :content="section"
          :alternate="isSmallScreen ? false : i % 2 !== 0"
        />
      </UContainer>
    </div>

    <div class="bg-gray-100">
      <UContainer class="space-y-10 py-10 text-center lg:py-24">
        <h3 class="text-2xl font-semibold">
          Helpful Links
        </h3>
        <ul class="flex flex-wrap justify-center gap-6">
          <PPRLinkCard v-for="item in helpfulLinks" :key="item.link" v-bind="item" />
        </ul>
      </UContainer>
    </div>

    <div class="bg-white">
      <UContainer class="space-y-6 py-10 text-center lg:py-24">
        <h3 class="text-3xl font-semibold">
          Create an Account to Get Started
        </h3>
        <p>Log in securely using your mobile BC Services Card, government's trusted way to access online services.</p>
        <div class="flex flex-col gap-4 lg:flex-row">
          <div class="prose prose-bcGov prose-li:list-[square] prose-li:m-0 prose-ul:pl-4 prose-h3:text-2xl prose-h4:text-2xl my-auto min-w-full flex-1 grow px-4 text-left marker:text-bcGovGray-500 sm:px-6 lg:min-w-[50%]">
            <h4>
              It's Secure
            </h4>
            <ul>
              <li>
                A mobile card is a representation of your BC Services Card on your mobile device. It's used to prove who you are when you log in to access government services online.
              </li>
              <li>
                Only your name and a unique identifier is stored on the mobile device.
              </li>
            </ul>
          </div>
          <div class="prose prose-bcGov prose-li:list-[square] prose-li:m-0 prose-ul:pl-4 prose-h3:text-2xl prose-h4:text-2xl my-auto min-w-full flex-1 grow px-4 text-left marker:text-bcGovGray-500 sm:px-6 lg:min-w-[50%]">
            <h4>
              It's Quick and Easy
            </h4>
            <ul>
              <li>
                <span>
                  It normally takes about 5 minutes to
                  <a
                    :href="config.public.setupBCSCURL"
                    target="_blank"
                  >
                    <span class="text-[#1a5a96] underline">set up a mobile card</span>
                    <UIcon name="i-mdi-open-in-new" class="ml-1 text-[#1a5a96]" />
                  </a>
                </span>
              </li>
              <li>
                You can verify your identity by video right from your mobile device. You don't need to go in person unless you can't verify by video.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <ClientOnly>
            <UButton
              v-if="!keycloak.isAuthenticated"
              label="Create a BC Registries Account"
              size="bcGov"
              class="bg-bcGovColor-footer font-semibold"
              :to="config.public.authWebURL + 'choose-authentication-method'"
              :block="isSmallScreen"
            />
          </ClientOnly>
          <UButton
            variant="outline"
            label="Learn More"
            size="bcGov"
            class="font-semibold text-bcGovColor-footer"
            :to="config.public.setupBCSCURL"
            :block="isSmallScreen"
          />
        </div>
      </UContainer>
    </div>

    <PPRContactInfo />
  </div>
</template>
