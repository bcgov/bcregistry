<script setup lang="ts">
const { locale, t } = useI18n()
const rtc = useRuntimeConfig().public
const { setLoginRedirectUrl, clearLogoutRedirectUrl } = useKeycloak()
const localePath = useLocalePath()

useHead({
  title: t('page.productFees.title')
})

definePageMeta({
  layout: 'main-full-width'
})

interface ProcessedService {
  service: string
  fee: number | string
  serviceCharge: number
  gst: number
  total: number | string
  url?: string
}

interface GroupedProduct {
  name: string
  services: ProcessedService[]
}

const productsRaw = [
  {
    product: 'Business Registry & Name Request',
    service: 'BC Registry Search',
    fee: 7,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Name Reservation',
    fee: 30,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Priority Name Reservation',
    fee: 130,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Alberta NUANS Search',
    fee: 32,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Annual Report Filing B.C./XPRO',
    fee: 43.39,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Society Annual Report',
    fee: 0,
    serviceCharge: 40,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Society Change of Directors',
    fee: 15,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Society Change of Address',
    fee: 15,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Society Incorporation Application',
    fee: 100,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Incorporation Application Regular',
    fee: 350,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Incorporation Application Future Effective Date',
    fee: 450,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Incorporation Unlimited Liability Company',
    fee: 1000,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'XPro Registration Regular',
    fee: 350,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'XPro Registration Future Effective Date',
    fee: 450,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Change of Address',
    fee: 20,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Change of Directors',
    fee: 20,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Notice of Alteration Regular',
    fee: 100,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Notice of Alteration Future Effective Date',
    fee: 200,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Notice of Alteration Unlimited Liability Company',
    fee: 1000,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Amalgamation Application Regular',
    fee: 350,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Amalgamation Application Future Effective Date',
    fee: 450,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Amalgamation Application Short Form Horizontal/Vertical Regular',
    fee: 350,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Amalgamation Application Short Form Horizontal/Vertical Future Effective Date',
    fee: 450,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Amalgamation Unlimited Liability Company',
    fee: 1000,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Continuation in Application',
    fee: 350,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Continuation in Unlimited Liability Company',
    fee: 1000,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Post Restoration Transition Application',
    fee: 0,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Transition Application',
    fee: 0,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Application for (Voluntary) Dissolution',
    fee: 20,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Priority Application for (Voluntary) Dissolution',
    fee: 120,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Application for (Voluntary) Dissolution Future Effective Date',
    fee: 120,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Priority Application for (Voluntary) Dissolution Future Effective Date',
    fee: 220,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Certificate of Good Standing',
    fee: 25,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Society Transition Package',
    fee: 40,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Business Registry & Name Request',
    service: 'Priority Society Transition Package',
    fee: 140,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'BC Assessment',
    service: 'Owner/ Location Query',
    fee: 7,
    serviceCharge: 1,
    gst: 0
  },
  {
    product: 'BC Assessment',
    service: 'Assessment Roll Query',
    fee: 9.5,
    serviceCharge: 1,
    gst: 0
  },
  {
    product: 'BC Assessment',
    service: 'Assessment/ Inventory Query',
    fee: 15,
    serviceCharge: 1,
    gst: 0
  },
  {
    product: 'eStrataHub',
    service: 'Strata Documents',
    fee: 'varied',
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Manufactured Home Registry',
    service: 'Search',
    fee: 7,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Manufactured Home Registry',
    service: 'Combined PPR Search (from your own computer)',
    fee: 12,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Manufactured Home Registry',
    service: 'Transport Permit',
    fee: 0,
    serviceCharge: 25,
    gst: 1.5
  },
  {
    product: 'Manufactured Home Registry',
    service: 'Manufactured Home Registration (for Manufacturer`s only)',
    fee: 50,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Manufactured Home Registry',
    service: 'Transfer of Ownership (restrictions apply)',
    fee: 50,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Manufactured Home Registry',
    service: 'Exemption Order (restrictions apply)',
    fee: 50,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Rural Property Tax',
    service: 'Search',
    fee: 5,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Site Registry',
    service: 'PID Search',
    fee: 25,
    serviceCharge: 1.05,
    gst: 1.25
  },
  {
    product: 'Site Registry',
    service: 'PIN Search',
    fee: 25,
    serviceCharge: 1.05,
    gst: 1.25
  },
  {
    product: 'Site Registry',
    service: 'Crown Land Search',
    fee: 25,
    serviceCharge: 1.05,
    gst: 1.25
  },
  {
    product: 'Site Registry',
    service: 'Site ID Search',
    fee: 10.5,
    serviceCharge: 1.05,
    gst: 0
  },
  {
    product: 'Site Registry',
    service: 'Address Search',
    fee: 52.5,
    serviceCharge: 1.05,
    gst: 0
  },
  {
    product: 'Site Registry',
    service: '1 Square Km Area Search',
    fee: 52.5,
    serviceCharge: 1.05,
    gst: 0
  },
  {
    product: 'Site Registry',
    service: '100 Square Km Area Search',
    fee: 105,
    serviceCharge: 1.05,
    gst: 0
  },
  {
    product: 'Site Registry',
    service: 'Synopsis Report',
    fee: 26.25,
    serviceCharge: 1.05,
    gst: 0
  },
  {
    product: 'Site Registry',
    service: 'Detail Report',
    fee: 52.5,
    serviceCharge: 1.05,
    gst: 0
  },
  {
    product: 'Court Services Online',
    service: 'CSO Court Lists',
    fee: 0,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Court Services Online',
    service: 'Search Civil',
    fee: 6,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Court Services Online',
    service: 'Search Appeal (no documents available)',
    fee: 6,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Court Services Online',
    service: 'Search Traffic/Criminal (no documents available)',
    fee: 0,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Court Services Online',
    service: 'Purchase Documents Online - each document',
    fee: 10,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Court Services Online',
    service: 'View and Print Electronic Documents - per file',
    fee: 6,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Court Services Online',
    service: 'E-Filing - per package submitted for filing',
    fee: 7,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Court Services Online',
    service: 'Statutory filing fees for court documents (Appendix C, Schedule 1 of the Supreme Court Rules)',
    fee: 'varied',
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'Wills Registry',
    service: 'Wills Registration (restrictions apply)',
    fee: 17,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Wills Registry',
    service: 'Wills Search (restrictions apply)',
    fee: 20,
    serviceCharge: 1.5,
    gst: 0
  },
  {
    product: 'Wills Registry',
    service: 'Each alias',
    fee: 5,
    serviceCharge: 0,
    gst: 0
  },
  {
    product: 'BC Online',
    service: 'User Guides can be downloaded free of charge from the User Guides page',
    fee: 0,
    serviceCharge: 0,
    gst: 0, url: 'https://www.bconline.gov.bc.ca/user_guides.html'
  },
  {
    product: 'Service Charges',
    service: 'Returned cheque or EFT',
    fee: 0,
    serviceCharge: 30,
    gst: 0
  },
  {
    product: 'Service Charges',
    service: 'Transfer funds between accounts',
    fee: 0,
    serviceCharge: 20,
    gst: 0
  }
]

function groupAndTotalProducts(inputProducts: typeof productsRaw): GroupedProduct[] {
  const groupedMap = inputProducts.reduce<Record<string, GroupedProduct>>((accumulator, currentItem) => {
    const { product, service, fee, serviceCharge, gst, url } = currentItem
    const total = typeof fee === 'string' ? fee : fee + serviceCharge + gst

    const processedService: ProcessedService = {
      service,
      fee,
      serviceCharge,
      gst,
      total,
      url
    }

    if (!accumulator[product]) {
      accumulator[product] = {
        name: product,
        services: []
      }
    }

    accumulator[product].services.push(processedService)

    return accumulator
  }, {})
  // sort by product name first, and then service name
  return Object.values(groupedMap)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(group => ({
      ...group,
      services: group.services.sort((a, b) => a.service.localeCompare(b.service))
    }))
}

const groupedProducts = computed(() => groupAndTotalProducts(productsRaw))

const formatCurrency = (value: number | null | undefined) =>
  new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' })
    .format(value ?? 0)

const currencyCell = (key: string) => ({ row }: { row: { getValue: (key: string) => string } }) => {
  const val = row.getValue(key)
  const num = Number.parseFloat(val)
  const displayVal = isNaN(num) ? val : formatCurrency(num)
  const capitalizedVal = displayVal.charAt(0).toUpperCase() + displayVal.slice(1)
  return h('div', { class: 'text-right font-medium' }, capitalizedVal)
}

const textHeader = (text: string, alignment: string) => () =>
  h('div', { class: `text-${alignment}` }, text)

const serviceColumns = [
  {
    accessorKey: 'service',
    header: textHeader('Service', 'left'),
    cell: ({ row }: { row: { original: { service: string, url?: string } } }) => {
      if (row.original.url) {
        return h('div', {
          innerHTML: `<a href="${row.original.url}" 
          target="_blank" class="underline text-bcGovColor-markBlue">${row.original.service}</a>` })
      } else {
        return h('div', row.original.service)
      }
    }
  },
  { accessorKey: 'fee', header: textHeader('Fee', 'right'), cell: currencyCell('fee'), meta: {
    class: { td: 'w-[170px]' }
  } },
  { accessorKey: 'serviceCharge', header: textHeader('Service Charge', 'right'), cell: currencyCell('serviceCharge'),
    meta: {
      class: { td: 'w-[170px]' }
    }
  },
  { accessorKey: 'gst', header: textHeader('GST', 'right'), cell: currencyCell('gst'), meta: {
    class: { td: 'w-[170px]' }
  } },
  { accessorKey: 'total', header: textHeader('Total', 'right'), cell: currencyCell('total'), meta: {
    class: { td: 'w-[170px]' }
  } }
]

const productTypes = computed(() => [
  { label: 'All Products', value: 'all' },
  ...groupedProducts.value.map((p: { name: string }) => ({ label: p.name, value: p.name }))])
const selectedProduct = ref('all')

const filteredProducts = computed(() => {
  if (selectedProduct.value === 'all') {
    return groupedProducts.value
  }
  return groupedProducts.value.filter((p: { name: string }) => p.name === selectedProduct.value)
})

watch(selectedProduct, (val: string) => {
  if (val === 'all') {
    history.replaceState(null, '', ' ')
  } else {
    window.location.hash = encodeURIComponent(val)
  }
})

onMounted(() => {
  setBreadcrumbs([
    { to: localePath('/'), label: t('labels.bcRegAndOLServices') },
    { label: t('labels.productFees') }
  ])
  clearLogoutRedirectUrl()
  setLoginRedirectUrl(`${rtc.baseUrl}${locale.value}/dashboard`)

  const hash = decodeURIComponent(window.location.hash.replace('#', '')).toLowerCase()
  const match = productTypes.value.find((type: { value: string }) => type.value.toLowerCase() === hash)
  if (match) {
    selectedProduct.value = match.value
  }
})
</script>

<template>
  <div>
    <div class=" bg-white bg-no-repeat bg-right-bottom">
      <div class="max-w-bcGovLg mx-auto pt-12 pb-12 px-4 flex flex-col">
        <h1 class="mb-4">
          {{ $t('page.productFees.h1') }}
        </h1>
        <p>
          {{ $t('page.productFees.p1') }}
        </p>
        <p>
          {{ $t('page.productFees.p2') }}
        </p>
      </div>
    </div>
    <div class="max-w-bcGovLg mx-auto px-4 flex flex-col m-0 gap-4 md:gap-8 py-4 md:px-4 md:py-8">
      <UCard
        :ui="{
          root: 'divide-none flex flex-col shadow-md relative',
          header: 'bg-bcGovColor-gray2 rounded-t-sm p-0 sm:px-0',
          body: 'p-4 sm:px-7 sm:pt-7 sm:pb-0 pb-0 grow',
          footer: 'p-4 sm:pb-7 sm:px-7'
        }"
        class="mb-10"
      >
        <template #header>
          <div class="flex justify-between pl-7 pr-4 font-bold">
            <span class="py-3.75 text-left text-bcGovColor-darkGray no-underline focus:outline-none">
              View Fees by Product Type
            </span>
          </div>
        </template>

        <div
          class="mb-4"
        >
          {{ $t('page.productFees.selectTitle') }}
        </div>
        <USelect
          id="product-select"
          v-model="selectedProduct"
          :items="productTypes"
          class="w-64 p-4 w-[50%]"
          :content="{
            sideOffset: 0
          }"
        />
        <template #footer />
      </UCard>
      <!-- iterate over the grouped products and display them in a card -->
      <UCard
        v-for="(product, index) in filteredProducts"
        :id="`${product.name}`"
        :key="index"
        :ui="{
          root: 'divide-none flex flex-col shadow-md relative',
          header: 'bg-bcGovColor-gray2 rounded-t-sm p-0 sm:px-0',
          body: 'p-4 sm:px-7 sm:pt-7 sm:pb-0 pb-0 grow',
          footer: 'p-4 sm:pb-7 sm:px-7'
        }"
        class="mb-10"
      >
        <template #header>
          <div class="flex justify-between pl-7 pr-4 font-bold">
            <span class="py-3.75 text-left text-bcGovColor-darkGray no-underline focus:outline-none">
              {{ product.name }}
            </span>
          </div>
        </template>

        <UTable
          :data="product.services"
          :columns="serviceColumns"
        />
      </UCard>
    </div>
  </div>
</template>
