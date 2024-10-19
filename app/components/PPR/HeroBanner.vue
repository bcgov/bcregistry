<script setup lang="ts">
const { $keycloak } = useNuxtApp()
const isSmallScreen = useMediaQuery('(max-width: 640px)')
const localePath = useLocalePath()
</script>
<template>
  <header class="bg-white bg-no-repeat lg:h-[30rem] lg:bg-ppr-homebanner lg:bg-[length:836px] lg:bg-right-bottom xl:bg-[length:1010px] 2xl:h-[35rem] 2xl:bg-[length:1130px]">
    <div class="mx-auto flex w-full max-w-bcGovLg items-center px-4 py-8 lg:h-[30rem] 2xl:h-[35rem]">
      <div class="prose prose-bcGov max-w-full lg:max-w-md xl:max-w-xl 2xl:max-w-[50%]">
        <h1>{{ $t('page.ppr.h1') }}</h1>
        <p>
          {{ $t('page.ppr.intro.p1') }}
        </p>
        <ClientOnly>
          <SbcAuthMenu v-if="!$keycloak.authenticated" :block="isSmallScreen" />
          <div v-if="!$keycloak.authenticated">
            <i18n-t keypath="page.ppr.intro.p2" tag="p" scope="global">
              <template #link>
                <a class="font-semibold text-[#1a5a96] underline" target="_blank" href="https://www.analytics.bcregistry.gov.bc.ca/">
                  {{ $t('btn.createRegAccount') }}
                </a>
              </template>
            </i18n-t>
          </div>

          <UButton
            v-else
            size="bcGov"
            class="bg-bcGovColor-header font-semibold no-underline"
            :label="$t('btn.goToBRD')"
            :block="isSmallScreen"
            :to="localePath('/dashboard')"
          />
        </ClientOnly>
      </div>
    </div>
  </header>
</template>
