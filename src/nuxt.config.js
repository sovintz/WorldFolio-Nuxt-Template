import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Router base for GitHub Pages
  router: {
    base: '/',
    trailingSlash: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover'},
      {name: 'theme-color', content: colors.blue.darken3}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/i18n',
      {
        // TODO: change
        baseUrl: 'https://example.com',
        // TODO: configure
        locales: [
          {
            code: 'en',
            iso: 'en',
            name: 'English',
            file: 'en.json'
          },
          {
            code: 'es',
            iso: 'es-ES',
            name: 'Español',
            file: 'es.json'
          }
        ],
        lazy: true,
        langDir: "_localization/",
        defaultLocale: 'en',
        detectBrowserLanguage: {
          alwaysRedirect: false,
          fallbackLocale: 'en',
          redirectOn: 'root',
          useCookie: false,
        },
        strategy: 'prefix',
        vueI18n: {
          fallbackLocale: 'en',
          silentTranslationWarn: process.env.NODE_ENV === 'production',
        }
      }
    ],
    [
      '@nuxtjs/recaptcha',
      {
        // TODO: change
        siteKey: "your_recaptcha_key",
        version: 3
      }
    ],
    [
      '@nuxtjs/axios'
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // TODO: change
    baseURL: 'https://formsubmit.co/ajax/jane@example.com',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          // TODO: configure
          primary: colors.blue.darken3,
          accent: colors.pink.darken2,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
