export const useUserProductsStore = defineStore('bcreg-user-products-store', () => {
  const accountStore = useConnectAccountStore()
  const ldStore = useConnectLaunchdarklyStore()
  const productInfo = useProductInfo()
  // const { $authApi, $keycloak } = useNuxtApp()
  const { $keycloak } = useNuxtApp()
  const authUrl = useRuntimeConfig().public.authApiURL

  const userProducts = ref<Product[]>([])
  const loading = ref<boolean>(false)

  async function getUserProducts () {
    try {
      loading.value = true
      userProducts.value = []
      // auth api not returning an array for some reason
      // const response = await $authApi(`/orgs/${accountStore.currentAccount.id}/products?include_hidden=true`)
      const response = await fetch(`${authUrl}/orgs/${accountStore.currentAccount.id}/products?include_hidden=true`, {
        headers: {
          Authorization: `Bearer ${$keycloak.token}`
        }
      })

      const activeProducts = (await response.json() as APIProduct[]).filter(product => product.subscriptionStatus === ProductStatus.ACTIVE)

      // only show products with no placeholder
      for (const product of activeProducts) {
        const enabledFF = `bcregistry-ui-${product.code}-enabled`.toLowerCase()
        // ensure has a default (otherwise it might not have an enabled flag set in LD)
        if (hasDefaultValue(enabledFF) && !ldStore.getStoredFlag(enabledFF)) {
          // skip disabled products
          continue
        }

        let currProduct = productInfo.getProductInfo(product.code)

        if (currProduct.title === 'placeholder_title') {
          console.error('Product tile not implemented:', product.code)
          continue
        }

        // block for MHR/PPR special rules
        if (productInfo.hasMhrAndPprProducts(activeProducts)) {
          if (product.code === ProductCode.PPR) {
            // replace ppr tile with assets
            currProduct = productInfo.getMhrPprTileInfo()
          } else if (product.code === ProductCode.MHR) {
            // skip mhr product (included with assets tile)
            continue
          }
        }

        userProducts.value.push(currProduct)
      }
    } catch (e) {
      logFetchError(e, 'Error fetching user products')
    } finally {
      setTimeout(() => {
        loading.value = false
      }, 300)
    }
  }

  // move this into core layer
  function hasDefaultValue (flagName: string): boolean {
    return Object.keys(ldStore.ldFlagSet).includes(flagName)
  }

  function $reset () {
    userProducts.value = []
    loading.value = false
  }

  // reload products if switching account
  watch(
    () => accountStore.currentAccount.id,
    async () => await getUserProducts()
  )

  return {
    userProducts,
    loading,
    getUserProducts,
    $reset
  }
})
