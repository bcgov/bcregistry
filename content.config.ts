import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home_enCA: defineCollection({
      type: 'page',
      source: {
        include: 'en-CA/home/**/*.md'
      },
      schema: z.object({
        content_type: z.string().optional()
      })
    }),
    home_product_cards_enCA: defineCollection({
      type: 'page',
      source: {
        include: 'en-CA/home/sections/**/cards/**/*.md'
      },
      schema: z.object({
        name: z.string(),
        badge: z.string(),
        link: z.object({
          label: z.string(),
          target: z.string(),
          href: z.string(),
          rtcKey: z.string(),
          appendAccountId: z.boolean(),
          locale: z.boolean(),
        })
      })
    })
  }
})
