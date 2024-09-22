/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**.{html,ts,js,vue}'],
  presets: [require('@daxiom/nuxt-core-layer-test/tailwind.config')],
  theme: {
    extend: {
      backgroundImage: {
        homebanner: "url('/img/BCReg_homebanner_images_final_80compressed_032521.jpg')"
      }
    }
  }
}
