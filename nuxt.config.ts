// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/css/style.css',]  ,
  vite: false,
  pages : true,
  devtools: { enabled: true},
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // modules: ['@nuxt/ui'],
  vite: {
    server: {
      hmr: false
    }
 },
 serverMiddleware: [
  '~/middleware/redirects.js'
]

})