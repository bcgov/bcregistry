<script setup lang="ts">
const keycloak = reactive(useKeycloak())
const isSmallScreen = useMediaQuery('(max-width: 640px)')
</script>
<template>
  <header class="bg-white bg-no-repeat lg:h-[30rem] lg:bg-ppr-homebanner lg:bg-[length:836px] lg:bg-right-bottom xl:bg-[length:1010px] 2xl:h-[35rem] 2xl:bg-[length:1130px]">
    <div class="mx-auto flex w-full max-w-bcGovLg items-center px-2 py-4 lg:h-[30rem] xl:h-[35rem]">
      <div class="prose prose-bcGov max-w-full lg:max-w-md xl:max-w-xl 2xl:max-w-[50%]">
        <h1>Register or search for legal claims on personal property</h1>
        <p>
          The Personal Property Registry records security interests and
          liens against personal property belonging to British Columbia businesses
          and individuals.
        </p>
        <SbcAuthMenu v-if="!keycloak.isAuthenticated" :block="isSmallScreen" />
        <div v-if="!keycloak.isAuthenticated" class="pt-6">
          <span>
            New to BC Registries?
            <a
              href="https://dev.account.bcregistry.gov.bc.ca/choose-authentication-method"
            >
              <span class="font-semibold text-[#1a5a96] underline">Create a BC Registries Account</span>
            </a>
          </span>
        </div>

        <UButton
          v-else
          size="bcGov"
          class="bg-bcGovColor-header font-semibold no-underline"
          label="Go to BC Registries Dashboard"
          :block="isSmallScreen"
          to="https://www.bcregistry.gov.bc.ca/dashboard"
        />
      </div>
    </div>
  </header>
</template>
