/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**.{html,ts,js,vue}'],
  presets: [require('@daxiom/nuxt-core-layer-test/tailwind.config')],
  theme: {
    extend: {
      backgroundImage: {
        homebanner: "url('/img/BCReg_homebanner_images_final_80compressed_032521.jpg')",
        'ppr-homebanner': "url('/img/PPR_homebanner_image_v2_x2.jpg')",
        'ppr-reportpaper': "url('/img/PPR_reportpaper_x2.jpg')",
        'ppr-search': "url('/img/PPR_search_screenshot.png')",
        'ppr-register': "url('/img/PPR_register_screenshot.png')"
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              'font-size': '2.5em'
            }
          }
        }
      }
    }
  }
}
