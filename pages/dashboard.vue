<template>
  <v-container fluid class="py-12">
    <h1 class="dash-header">BC Registries Dashboard</h1>

    <p class="dash-header-info ma-0 pt-3">Access to your BC Registries account product and services</p>

    <h3 class="dash-sub-header">
      My Products and Services
      <span style="font-weight: normal;">({{ subscribedProducts.length  }})</span>
    </h3>

    <v-row no-gutters>
      <div class="col-md-8 col-sm-12">
        <UserProduct
          v-for="product in subscribedProducts"
          :key="product.code"
          class="mt-5"
          :product="getProductInfo($config, product.code)"
        />
      </div>

      <div class="pl-6 col-md-4 col-sm-12">
        <v-container fluid rounded class="dash-container-info mt-5 white">
          <h4>Add Product and Services</h4>
          <p class="ma-0 pt-3">
            To request access to additional products and services, contact the account
            Administrator of your BC Registries account.
          </p>
        </v-container>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { SessionStorageKeys } from 'sbc-common-components/src/util/constants'
import UserProduct from '@/components/UserProduct.vue'
import { ProductCode, ProductStatus } from '@/enums'
import { fetchAccountProducts, getKeycloakRoles, getProductInfo, sleep } from '@/utils'

export default Vue.extend ({
  components: {
    UserProduct,
  },
  asyncData ({ $config, redirect }) {
    // if user is not logged in, redirect to home page
    const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
    if (!token) {
      return redirect($config.baseURL)
    }

    // if user is staff, redirect to Business Registry staff dashboard
    try {
      if (getKeycloakRoles().includes('staff')) {
        return redirect($config.authURL + 'staff/dashboard/active')
      }
    } catch {} // ignore errors
  },
  data () {
    return {
      getProductInfo, // for use in template
      subscribedProducts: [],
    }
  },
  computed: {
    isLoggedIn (): boolean {
      const token = sessionStorage.getItem(SessionStorageKeys.KeyCloakToken)
      return !!token
    },
  },
  async mounted () {
    // get roles
    let roles: Array<string>
    try {
      roles = getKeycloakRoles()
    } catch (e) {
      roles = []
    }

    // safety check - sometimes this page is rendered
    // even if we redirected in asyncData()
    if (roles.includes('staff')) return

    // get products / services
    let products = []
    if (roles.includes('gov_account_user')) {
      products = [
        {
          code: ProductCode.BUSINESS,
          subscriptionStatus: ProductStatus.ACTIVE
        },
        {
          code: ProductCode.PPR,
          subscriptionStatus: ProductStatus.ACTIVE
        },
      ]
    } else {
      products = await fetchAccountProducts(await this.getAccountId())
    }
    this.subscribedProducts = products.filter(
      product => product.subscriptionStatus === ProductStatus.ACTIVE
    )
  },
  methods: {
    /**
     * Returns account id from object in session storage.
     * Waits up to 1 sec for current account to be synced (typically by SbcHeader).
     */
    async getAccountId (): Promise<number> {
      for (let i = 0; i < 10; i++) {
        const currentAccount = sessionStorage.getItem(SessionStorageKeys.CurrentAccount)
        const account = JSON.parse(currentAccount)
        const accountId = account?.id as number
        if (accountId) return accountId
        await sleep(100)
      }
      return null
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';

.dash-container-info {
  padding: 30px;

  p {
    color: $gray7;
    font-size: $px-14;
    line-height: 1.375rem;
  }
}

.dash-header {
  color: $gray9;
}

.dash-header-info {
  color: $gray7;
  font-size: $px-16;
}

.dash-sub-header {
  color: $gray9;
  font-size: $px-18;
  padding-top: 50px;
}
</style>
