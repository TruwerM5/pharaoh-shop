// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      }
    },
    baseURL: '/pharaoh-shop/'
  },
  modules: ['@pinia/nuxt'],
  devtools: { enabled: false },  
  css: ['~/assets/sass/style.sass'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  router: {

  }
})
