// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
  $development: {
    runtimeConfig: {
      apiBase: 'http://localhost:3000'
    }
  },
  $production: {
    runtimeConfig: {
      apiBase: '' //SERVER REMOTE HOST
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
    },
    pageTransition: {name: 'page', mode: 'out-in'},
    
  },
  modules: ['@pinia/nuxt', "@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  devtools: { enabled: true },  
  css: ['~/assets/sass/style.sass'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})