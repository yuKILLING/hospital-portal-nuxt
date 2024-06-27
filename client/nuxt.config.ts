export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', "@nuxt/image"],
  ssr: true,
  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  components:[
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/shared',
      pathPrefix: false,
    },
    {
      path: '~/widgets',
      pathPrefix: false,
    }
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://server-production-5c9a.up.railway.app',
    },
  },
  
})