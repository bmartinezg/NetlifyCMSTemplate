export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CMS Bruno',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/main.scss', 'animate.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
    // https://levelup.gitconnected.com/what-are-env-files-and-how-to-use-them-in-nuxt-7f194f083e3d
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.netlifycms.org/docs/nuxt/
    '@nuxt/content',
    // https://medium.com/dont-leave-me-out-in-the-code/global-scss-variables-in-nuxt-5fe864873cb5
    '@nuxtjs/style-resources',
    // https://www.npmjs.com/package/nuxt-buefy
    ['nuxt-buefy', { css: false }],
    // https://sitemap.nuxtjs.org/guide/configuration
    '@nuxtjs/sitemap',
    ['nuxt-stripe-module', {
      publishableKey: 'pk_live_7JwyOB2wLdPb8hvpxbqvGiqo00jOhFMjXs',
    }],
  ],
  sitemap: {
    // http://localhost:3000/sitemap.xml
    hostname: 'http://localhost:3000',
    exclude: ['/admin'],
  },

  googleAnalytics: {
    id: 'UA-XXX-X',
  },

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config/
  publicRuntimeConfig: {
    STRIPE_PK: process.env.NUXT_ENV_STRIPE_PK,
  },
}
