<script setup lang="ts">
const keycloak = reactive(useKeycloak())
// import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
// import { setLoginUrl, setLogoutUrl } from '@/utils'

useHead({
  title: 'BC Personal Property Registry'
})

definePageMeta({
  order: 0,
  layout: 'bcreghome'
})

const PPR_HREF = 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/bc-registry-services-personal-property-registry'
const VEH_HIST_RPTS_HREF = 'https://www.icbc.com/vehicle-registration/buy-vehicle/buy-a-used-vehicle/Pages/Vehicle-history-reports.aspx'

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
      href: 'https://www.icbc.com/vehicle-registration/buy-vehicle/buy-a-used-vehicle/Vehicle-history-reports'
    }
  }
]

// computed: {
//   isLoggedIn (): boolean {
//     const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
//     return !!token
//   },
// },
// mounted () {
//   // if user logs in from this page, go to dashboard
//   setLoginUrl(this.$config.registryDashboard)
//   // if user logs out from this page, return here
//   setLogoutUrl(this.$config.registryPprMarketing)
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
        <div class="flex flex-col lg:h-[450px] lg:flex-row">
          <div class="min-h-[340px] flex-1 bg-ppr-search bg-contain bg-center bg-no-repeat" />
          <div class="prose prose-bcGov prose-li:list-[square] prose-li:m-0 prose-ul:pl-4 prose-h3:text-2xl my-auto min-w-full flex-1 grow px-4 py-8 text-left marker:text-bcGovGray-500 sm:px-6 lg:min-w-[50%]">
            <h3>
              Search for Registered Security Agreements and Liens
            </h3>
            <ul>
              <li>
                Search for legal claims on personal property as well as the people, businesses, and organizations associated with these claims.
              </li>
              <li>
                Select registrations to download and view the secured parties, debtors, and collateral in each.
              </li>
              <li>
                View and manage your search history.
              </li>
              <li>
                Download copies of your Search Result Reports for your records or for use in court.
              </li>
            </ul>
            <p class="italic">
              Note: The Personal Property Registry includes interests in fixtures and crops (personal property attached to land), but does not include ownership and interests in real property (land). Find real property interests in the Land Title Surveyor Authority (LTSA) .
            </p>
          </div>
        </div>

        <div class="flex flex-col lg:h-[450px] lg:flex-row">
          <div class="prose prose-bcGov prose-li:list-[square] prose-li:m-0 prose-ul:pl-4 prose-h3:text-2xl my-auto min-w-full flex-1 grow px-4 py-8 text-left marker:text-bcGovGray-500 sm:px-6 lg:min-w-[50%]">
            <h3>
              Get Detailed Search Result Reports
            </h3>
            <ul>
              <li>
                Get a detailed report containing the list of registrations that match your criteria.
              </li>
              <li>
                See the current information and complete history of each registration in your report.
              </li>
              <li>
                Easily find a particular registration in your report.
              </li>
              <li>
                Use your Search Result Report as evidence of a claim, or lack of a claim, on personal property.
              </li>
            </ul>
          </div>
          <div class="min-h-[340px] flex-1 bg-ppr-reportpaper bg-contain bg-center bg-no-repeat" />
        </div>

        <div class="flex flex-col lg:h-[450px] lg:flex-row">
          <div class="min-h-[340px] flex-1 bg-ppr-register bg-contain bg-center bg-no-repeat" />
          <div class="prose prose-bcGov prose-li:list-[square] prose-li:m-0 prose-ul:pl-4 prose-h3:text-2xl my-auto min-w-full flex-1 grow px-4 py-8 text-left marker:text-bcGovGray-500 sm:px-6 lg:min-w-[50%]">
            <h3>
              Register Security Agreements and Liens
            </h3>
            <ul>
              <li>
                Register legal claims on personal property.
              </li>
              <li>
                Look up Secured Parties based on a B.C. business name or incorporation number or enter them manually.
              </li>
              <li>
                Save drafts of your financing statements before registering.
              </li>
              <li>
                Review your registration for accuracy prior to payment.
              </li>
              <li>
                Manage and find your draft and registered financing statements easily.
              </li>
              <li>
                See if your registrations are due to expire or if they have been discharged.
              </li>
              <li>
                Amend, Renew, or Discharge registrations.
              </li>
            </ul>
          </div>
        </div>
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
                It normally takes about 5 minutes to set up a mobile card .
              </li>
              <li>
                You can verify your identity by video right from your mobile device. You don't need to go in person unless you can't verify by video.
              </li>
            </ul>
          </div>
        </div>
        <UButton variant="outline" label="Learn More" size="bcGov" class="font-semibold" />
      </UContainer>
    </div>

    <PPRContactInfo />
  </div>
</template>
