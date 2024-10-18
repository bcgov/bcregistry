<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

useHead({
  title: t('page.notFound.title')
})
</script>
<template>
  <div class="flex min-h-full flex-col items-center justify-center gap-4 px-4 pt-10">
    <span class="text-9xl italic text-bcGovColor-midGray">404</span>
    <h1>{{ $t('page.notFound.h1') }}</h1>
    <p class="text-center">
      {{ $t('page.notFound.text') }}
    </p>

    <UButton
      :label="$t('btn.goHome')"
      icon="i-mdi-home"
      size="bcGov"
      :to="localePath('/')"
    />
  </div>
</template>
