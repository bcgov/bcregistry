import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home_hero_enCA: defineCollection({
      type: 'page',
      source: {
        include: 'en-CA/home/hero.md'
      }
    }),
    home_sections_enCA: defineCollection({
      type: 'page',
      source: {
        include: 'en-CA/home/sections/**/*.md'
      }
    }),
    home_product_cards_enCA: defineCollection({
      type: 'page',
      source: {
        include: 'en-CA/home/cards/**/*.md'
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
    }),
    // cards_product_enCA: defineCollection({
    //   type: 'page',
    //   source: {
    //     include: 'en-CA/cards/product/**/*.md'
    //   },
    //   schema: z.object({
    //     name: z.string().min(1),
    //     badge: z.string().optional(),
    //     link: z.object({
    //       label: z.string().optional(),
    //       target: z.string().optional(),
    //       href: z.string().optional(),
    //       rtcKey: z.string().optional(),
    //       appendAccountId: z.boolean().optional(),
    //       locale: z.boolean().optional(),
    //     }).optional()
    //   })
    // }),
  }
})
