export function useProductInfo () {
  const config = useRuntimeConfig().public
  const accountStore = useConnectAccountStore()
  const { t } = useI18n()

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
          text: t('page.dashboard.products.business.text'),
          title: t('page.dashboard.products.business.title')
        } as Product
      case ProductCode.BUSINESS_SEARCH:
        return {
          image: 'img/business_search_product_image.jpg',
          link: appendAccountId(config.businessSearchUrl),
          text: t('page.dashboard.products.busSearch.text'),
          title: t('page.dashboard.products.busSearch.title')
        } as Product
      case ProductCode.BCA:
        return {
          image: 'img/BCA_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.bcaURL),
          text: t('page.dashboard.products.bca.text'),
          title: t('page.dashboard.products.bca.title')
        } as Product
      case ProductCode.CSO:
        return {
          image: 'img/CSO_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.csoURL),
          text: t('page.dashboard.products.cso.text'),
          title: t('page.dashboard.products.cso.title')
        } as Product
      case ProductCode.MHR:
        return {
          image: 'img/MHR_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.pprDashboard),
          text: t('page.dashboard.products.mhr.text'),
          title: t('page.dashboard.products.mhr.title')
        } as Product
      case ProductCode.NDS:
        return {
          image: 'img/NDS_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.ndsUrl),
          text: t('page.dashboard.products.nds.text'),
          title: t('page.dashboard.products.nds.title')
        } as Product
      case ProductCode.PPR:
        return {
          image: 'img/PPR_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.pprDashboard),
          text: t('page.dashboard.products.ppr.text'),
          title: t('page.dashboard.products.ppr.title')
        } as Product
      case ProductCode.RPT:
        return {
          image: 'img/RPT_dashboard_thumbnail_image.jpg',
          link: config.rptURL,
          text: t('page.dashboard.products.rpt.text'),
          title: t('page.dashboard.products.rpt.title')
        } as Product
      case ProductCode.ESRA:
        return {
          image: 'img/ESRA_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.siteRegistryURL),
          text: t('page.dashboard.products.esra.text'),
          title: t('page.dashboard.products.esra.title')
        } as Product
      case ProductCode.VS:
        return {
          image: 'img/VS_dashboard_thumbnail_image.jpg',
          link: appendAccountId(config.willsURL),
          text: t('page.dashboard.products.vs.text'),
          title: t('page.dashboard.products.vs.title')
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
      text: t('page.dashboard.products.mar.text'),
      title: t('page.dashboard.products.mar.title')
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
