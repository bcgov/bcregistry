// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,

  future: {
    compatibilityVersion: 4
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/en-CA',
        '/fr-CA'
      ]
    }
  },

  routeRules: {
    '/': { redirect: '/en-CA' }
  },

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/test-utils/module',
    '@nuxt/image'
  ],

  extends: ['@daxiom/nuxt-core-layer-test'],

  imports: {
    dirs: ['stores', 'composables', 'enums', 'interfaces', 'types', 'utils']
  },

  icon: {
    clientBundle: {
      icons: [
        'mdi:bell-outline',
        'mdi:help-circle-outline',
        'mdi:alert',
        'mdi:domain',
        'mdi:web',
        'mdi:check',
        'mdi:magnify',
        'mdi:open-in-new',
        'mdi:calendar',
        'mdi:close',
        'mdi:info-outline',
        'mdi:delete',
        'mdi:format-list-bulleted-square',
        'mdi:delete-forever',
        'mdi:window-close',
        'mdi:checkbox-multiple-blank-outline',
        'mdi:caret-down',
        'mdi:account-cog',
        'mdi:information-outline',
        'mdi:account-group-outline',
        'mdi:account-outline',
        'mdi:logout-variant',
        'mdi:plus',
        'mdi:menu',
        'mdi:two-factor-authentication',
        'mdi:account-card-details-outline',
        'mdi:new-box',
        'mdi:file-document-outline',
        'mdi:alert-circle-outline',
        'mdi:refresh',
        'heroicons:arrow-path-20-solid',
        'heroicons:circle-stack-20-solid',
        'heroicons:check-20-solid'
      ]
    }
  },

  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en-CA',
        iso: 'en-CA',
        dir: 'ltr',
        file: 'en-CA.ts'
      },
      {
        name: 'Français',
        code: 'fr-CA',
        iso: 'fr-CA',
        dir: 'ltr',
        file: 'fr-CA.ts'
      }
    ],
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en-CA',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },

  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  runtimeConfig: {
    public: {
      // Keys within public, will be also exposed to the client-side
      baseURL: process.env.NUXT_BASE_URL,
      environment: process.env.NUXT_ENVIRONMENT_HEADER || '',
      version: `BCROS UI v${process.env.npm_package_version || ''}`,
      addressChangeURL: process.env.NUXT_ADDRESSCHANGE_URL,
      bcaLearnMoreURL: process.env.NUXT_BCA_LEARN_MORE_URL,
      bcaURL: process.env.NUXT_BCA_URL,
      bceidURL: process.env.NUXT_BCEID_URL,
      bcolURL: process.env.NUXT_BCOL_URL,
      busSrchLearnMoreURL: process.env.NUXT_BUS_SEARCH_LEARN_MORE,
      businessSearchUrl: process.env.NUXT_BUSINESS_SEARCH_URL,
      businessURL: process.env.NUXT_BUSINESS_URL,
      colinURL: process.env.NUXT_COLIN_URL,
      csoLearnMoreURL: process.env.NUXT_CSO_LEARN_MORE_URL,
      csoURL: process.env.NUXT_CSO_URL,
      mhrLearnMoreURL: process.env.NUXT_MHR_LEARN_MORE,
      ndsUrl: process.env.NUXT_NDS_URL,
      siteRegistryLearnMoreURL: process.env.NUXT_ESRA_LEARN_MORE_URL,
      siteRegistryURL: process.env.NUXT_ESRA_URL,
      nameRequestURL: process.env.NUXT_NAME_REQUEST_URL,
      orgBookURL: process.env.NUXT_ORGBOOK_URL,
      pprURL: process.env.NUXT_PPR_URL,
      regAccountCreateURL: process.env.NUXT_REGISTRY_ACCOUNT_CREATE_URL,
      regApiGatewayURL: process.env.NUXT_REGISTRIES_API_GATEWAY_URL,
      rptURL: process.env.NUXT_RPT_URL,
      rptLearnMoreURL: process.env.NUXT_RPT_LEARN_MORE_URL,
      siteMinderLogoutUrl: process.env.NUXT_SITEMINDER_LOGOUT_URL,
      societiesURL: process.env.NUXT_SOCIETIES_URL,
      statusAPIURL: `${process.env.NUXT_STATUS_API_URL}${process.env.NUXT_STATUS_API_VERSION}`,
      willsLearnMoreURL: process.env.NUXT_WILLS_LEARN_MORE_URL,
      willsURL: process.env.NUXT_WILLS_URL,
      supportFilingUrl: process.env.NUXT_SUPPORT_FILING_URL,
      setupBCSCURL: process.env.NUXT_SETUP_BCSC_URL,
      businessRegistryStaffDashboard: `${process.env.NUXT_AUTH_WEB_URL}staff/dashboard/active`,
      myBusinessRegistryDashboard: `${process.env.NUXT_AUTH_WEB_URL}account/{accountId}/business`,
      pprDashboard: `${process.env.NUXT_PPR_URL}/dashboard`
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "../assets/styles/theme.scss" as *;'
        }
      }
    },
    optimizeDeps: { // optimize immediately instead of after visiting page, prevents page reload in dev when initially visiting a page with these deps
      include: ['zod', 'uuid', 'vitest']
    }
    // build: {
    //   assetsInlineLimit: 0
    // }
  },

  build: {
    transpile: ['@vuepic/vue-datepicker']
  },

  piniaPersistedstate: {
    storage: 'sessionStorage'
  },

  content: {
    locales: [
      'en-CA',
      'fr-CA'
    ],
    contentHead: false,
    markdown: {
      anchorLinks: { depth: 2, exclude: [1] }
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
  // compatibilityDate: '2024-07-03' add compatibility date?
})
