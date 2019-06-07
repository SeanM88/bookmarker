import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Font Awesome
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css', integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay', crossorigin: 'anonymous' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/normalize.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/firebase.js',
    './plugins/auth-state.js'
  ],

  /*
  ** The router property lets you customize Nuxt.js router
  ** - https://nuxtjs.org/api/configuration-router
  */
  router: {
    middleware: [
      'auth-routes'
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Nuxt Style Resources
  ** - no need to import global scss variables/mixins everywhere
  ** - https://github.com/nuxt-community/style-resources-module
  */
  styleResources: {
    scss: [
      './assets/scss/_variables.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
