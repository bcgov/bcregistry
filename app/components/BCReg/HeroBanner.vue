<template>
  <header class="min-[1120px]:bg-homebanner min-[1120px]:h-[30rem] bg-white bg-no-repeat lg:bg-[length:845px] lg:bg-right-bottom xl:bg-[length:955px] 2xl:h-[35rem] 2xl:bg-[length:1145px]">
    <div class="min-[1120px]:h-[30rem] min-[1120px]:py-0 mx-auto flex w-full max-w-bcGovLg items-center px-4 py-8 2xl:h-[35rem]">
      <div class="prose prose-bcGov min-[1120px]:max-w-md max-w-full xl:max-w-xl 2xl:max-w-[40%]">
        <h1> {{ $t('page.home.h1') }} </h1>
        <p> {{ $t('page.home.intro.p1') }} </p>
        <p> {{ $t('page.home.intro.p2') }} </p>
        <i18n-t keypath="page.home.intro.p3" tag="p" scope="global">
          <template #link>
            <a class="font-semibold text-[#1a5a96] underline" target="_blank" href="https://www.analytics.bcregistry.gov.bc.ca/">
              {{ $t('page.home.intro.p3Link') }}
            </a>
            <span class="ml-1 inline-flex pb-1 align-middle">
              <UIcon name="i-mdi-open-in-new" class="size-4 shrink-0 text-[#1a5a96]" />
            </span>
          </template>
        </i18n-t>
      </div>
    </div>
  </header>
</template>
