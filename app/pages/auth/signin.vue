<script setup lang="ts">
const connectNav = reactive(useConnectNav())
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('page.signin.title')
})

definePageMeta({
  middleware: ['signin-page']
})

const items = computed(() => {
  return connectNav.loggedOutUserOptions[1]
})

setBreadcrumbs([
  { to: localePath('/'), label: t('labels.bcRegAndOLServices') },
  { label: t('page.signin.h1') }
])
</script>
<template>
  <ClientOnly>
    <div class="flex justify-center p-4 sm:py-8">
      <UCard class="max-w-md">
        <h1>
          {{ $t('page.signin.h1') }}
        </h1>
        <p class="pt-2 text-bcGovColor-midGray dark:text-gray-300">
          {{ $t('page.signin.intro') }}
        </p>
        <img src="/img/BCReg_Generic_Login_image.jpg" class="mt-4" :alt="$t('imageAlt.genericLogin')">
        <div class="space-y-4 pt-5 sm:pt-6">
          <ClientOnly>
            <UButton
              v-for="(item, i) in items"
              :key="item.label"
              :color="i === 0 ? 'primary' : 'gray'"
              block
              :icon="item.icon"
              :label="$t('page.signin.option', { option: item.label })"
              :ui="{
                gap: { sm: 'gap-x-2.5' }
              }"
              @click="() => item.click!()"
            />
            <UDivider :label="$t('words.OR')" />
            <UButton
              :label="$t('btn.createAnAccount')"
              block
              color="gray"
              :to="connectNav.createAccountUrl()"
            />
          </ClientOnly>
        </div>
      </UCard>
    </div>
  </ClientOnly>
</template>
