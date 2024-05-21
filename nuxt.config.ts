// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
    },
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
    options: {
      
    }
  }
})
