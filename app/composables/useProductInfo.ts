export function useProductInfo () {
  const config = useRuntimeConfig().public
  const accountStore = useConnectAccountStore()

  function appendAccountId (url: string): string {
    return url ? `${url}?accountid=${accountStore.currentAccount.id}` : 'link_not_configured'
  }

  /**
    * Returns product info object for specified type.
  */
  function getProductInfo (type: ProductCode): Product {
    switch (type) {
      case ProductCode.BUSINESS:
        return {
          image: 'img/BCRS_dashboard_thumbnail_image.jpg',
          link: config.myBusinessRegistryDashboard.replace('{accountId}', accountStore.currentAccount.id) || 'link_not_configured',
          text: 'Register or incorporate a business, manage name requests and keep business records up to date.',
          title: 'My Business Registry'
        } as Product
      case ProductCode.BUSINESS_SEARCH:
        return {
          image: 'img/business_search_product_image.jpg',
          link: appendAccountId(config.businessSearchUrl),
          text: 'Search for businesses registered in B.C. and access business documents.',
          title: 'Business Search'
        } as Product
      case ProductCode.BCA:
        return {
          image: 'img/BCA_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.bcaURL),

          text: 'Generate a BC Assessment report to find real property ownership or location information, obtain property assessment information or obtain residential property inventory details for properties within British Columbia.',
          title: 'BC Assessment'
        } as Product
      case ProductCode.CSO:
        return {
          image: 'img/CSO_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.csoURL),

          text: 'Make applications or file other court documents, browse daily court listings, and search court file information.',
          title: 'Court Services Online'
        } as Product
      case ProductCode.MHR:
        return {
          image: 'img/MHR_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.pprDashboard),

          text: 'Search for manufactured homes, and search for personal property legal claims on manufactured homes.',
          title: 'My Manufactured Home Registry'
        } as Product
      case ProductCode.NDS:
        return {
          image: 'img/NDS_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.ndsUrl),
          text: 'Search for the names and addresses of people associated with businesses in B.C.',
          title: 'Director Search'
        } as Product
      case ProductCode.PPR:
        return {
          image: 'img/PPR_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.pprDashboard),
          text: 'Register or search for legal claims on personal property in British Columbia.',
          title: 'My Personal Property Registry'
        } as Product
      case ProductCode.RPT:
        return {
          image: 'img/RPT_dashboard_thumbnail_image.jpg',
          link: config.rptURL,
          text: `Search property tax records for rural properties or leased crown land in B.C.,
               excluding municipal and Indigenous lands.`,
          title: 'Rural Property Tax Search'
        } as Product
      case ProductCode.ESRA:
        return {
          image: 'img/ESRA_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.siteRegistryURL),
          text: 'Search for B.C. government information on the environmental condition of land.',
          title: 'Site Registry'
        } as Product
      case ProductCode.VS:
        return {
          image: 'img/VS_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.willsURL),
          text: 'File a wills notice or search for an existing wills notice.',
          title: 'Wills Registry'
        } as Product
      default:
        return {
          image: 'placeholder_image',
          link: 'placeholder_link',
          text: 'placeholder_text',
          title: 'placeholder_title'
        } as Product
    }
  }

  /**
    * Get info for My Asset Registries tile (that replaces MHR and PPR products)
  */
  function getMhrPprTileInfo (): Product {
    return {
      image: 'img/My_Asset_Registries_dashboard_thumbnail_image.jpg',
      link: appendAccountId(config.pprDashboard) || 'link_not_configured',
      text: 'Search for manufactured homes, and register or search for legal claims on personal property.',
      title: 'My Asset Registries'
    }
  }

  /**
    * Check if products array has MHR and PPR
  */
  function hasMhrAndPprProducts (products: Array<APIProduct>): boolean {
    return products
      .filter(product => product.code === ProductCode.MHR || product.code === ProductCode.PPR)
      .length === 2
  }

  return {
    getProductInfo,
    getMhrPprTileInfo,
    hasMhrAndPprProducts
  }
}
