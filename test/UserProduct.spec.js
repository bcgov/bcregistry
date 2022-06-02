import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises'
// local
import UserProduct from '@/components/UserProduct.vue'
import { state } from '@/store'
import { createComponent } from '@/test/utils'
import { hasMhrAndPprProducts, combineAssetProducts, getProductInfo } from '@/utils'
import { ProductCode } from '@/enums'


Vue.use(Vuetify)
const vuetify = new Vuetify({})
const store = state
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('UserProduct tests', () => {
  let wrapper
  const propsData = {
    product: {
      image: '',
      link: '',
      text: '',
      title: ''
    }
  }
  beforeEach(async () => {
    wrapper = createComponent(UserProduct, localVue, store, propsData, vuetify)
    await flushPromises()
  })
  afterEach(() => {
    wrapper.destroy()
  })

  test('It renders given title and props', async () => {
    const testProduct = {
      image: '',
      link: '',
      text: 'test text',
      title: 'test title'
    }
    await wrapper.setProps({ product: testProduct })
    expect(wrapper.findComponent(UserProduct).exists()).toBe(true)
    expect(wrapper.findComponent(UserProduct).vm.$props.product).toEqual(testProduct)
    expect(wrapper.find('.service-info h2').exists()).toBe(true)
    expect(wrapper.find('.service-info h2').text()).toBe(testProduct.title)
    expect(wrapper.find('.service-info p').exists()).toBe(true)
    expect(wrapper.find('.service-info p').text()).toBe(testProduct.text)
  })
})

describe('User Product helper functions tests', () => {
  test('should check for PPR and MHR products', () => {

    let products = [
      {
        "description": "Business Registry & Name Request",
        "code": "BUSINESS",
      },
      {
        "description": "Personal Property Registry",
        "code": "PPR",
      },
      {
        "description": "Manufactured Home Registry",
        "code": "MHR",
      },
      {
        "description": "Wills Registry",
        "code": "VS"
      }
    ]

    expect(hasMhrAndPprProducts(products)).toBe(true)

    products = [
      {
        "description": "Business Registry & Name Request",
        "code": "BUSINESS",
      },
      {
        "description": "Personal Property Registry",
        "code": "PPR"
      }
    ]

    expect(hasMhrAndPprProducts(products)).toBe(false)

  })

  test('should combine MHR and PPR products into one registry (asset)', () => {

    const products = [
      {
        "description": "Business Registry & Name Request",
        "code": "BUSINESS",
      },
      {
        "description": "Personal Property Registry",
        "code": "PPR",
      },
      {
        "description": "Manufactured Home Registry",
        "code": "MHR",
      },
      {
        "description": "Wills Registry",
        "code": "VS"
      }
    ]

    const combinedProducts = combineAssetProducts(products)
    const mhrPprProduct = combinedProducts.find(p => p.code === ProductCode.PPR_MHR)

    expect(combinedProducts.length).toBe(3)
    expect(mhrPprProduct).not.toBe(null)
    expect(getProductInfo({ pprDashboard: '' }, mhrPprProduct.code).title).toContain('My Asset Registries')
  })
})

