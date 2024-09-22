<script setup lang="ts">
const PPR_HREF = 'https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/' +
    'bc-registry-services-personal-property-registry'

const MAILTO_HREF = 'mailto:bcolhelp@gov.bc.ca?subject=Personal%20Property%20Registry%20Support%20Request'
</script>
<template>
  <div class="w-full bg-bcGovColor-footer p-4 text-white sm:py-9">
    <div class="mx-auto flex max-w-bcGovLg flex-col gap-4 md:flex-row">
      <div class="flex-1">
        <h3 class="border-b border-blue-300 py-2 text-center text-xl font-semibold sm:text-left">
          Need more information?
        </h3>
        <p class="py-6">
          To learn more about Personal Property Registration in British Columbia, please
          <a
            :href="PPR_HREF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="underline">visit the Personal Property Information page.</span>
          </a>
          <UIcon name="i-mdi-open-in-new" class="ml-1 size-5 align-middle" />
        </p>
      </div>
      <div class="flex-1 md:max-w-md lg:max-w-lg">
        <h3 class="border-b border-blue-300 py-2 text-center text-xl font-semibold sm:text-left">
          Contact Us
        </h3>
        <div class="space-y-7 py-6 pb-0 sm:pb-6">
          <p>
            For support or questions about this application, contact us at:
          </p>
          <ul class="space-y-1">
            <li>
              <span>Toll Free: <a class="underline" href="tel:+1-877-526-1526">1-877-526-1526</a></span>
            </li>
            <li>
              <span>Email: <a class="underline" :href="MAILTO_HREF">bcolhelp@gov.bc.ca</a></span>
            </li>
          </ul>

          <p>
            <strong>Hours of Operation:</strong>
            <br>
            Monday to Friday, 8:30am - 4:30pm Pacific time
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
