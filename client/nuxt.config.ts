// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", '@formkit/auto-animate/nuxt'],
  ssr: true,
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://server-production-5c9a.up.railway.app',
    },
  },
})