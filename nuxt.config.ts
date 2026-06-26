// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      clientUserApiBase:
        process.env.CLIENT_USER_API_BASE,
      loginBaseUrl: process.env.LOGIN_BASE_URL
    },
  },

  modules: ['@nuxtjs/i18n', '@nuxt/image', 'nuxt-swiper'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    locales: [
      { code: 'zh', file: 'zh.json', name: '简体中文' },
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'es', file: 'es.json', name: 'Español' },
      { code: 'pt', file: 'pt.json', name: 'Português' },
      { code: 'id', file: 'id.json', name: 'Indonesia' },
      { code: 'ja', file: 'ja.json', name: '日本語' },
      { code: 'ko', file: 'ko.json', name: '한국어' },
      { code: 'fr', file: 'fr.json', name: 'Français' },
      { code: 'de', file: 'de.json', name: 'Deutsch' },
      { code: 'vi', file: 'vi.json', name: 'Tiếng Việt' },
      { code: 'th', file: 'th.json', name: 'ภาษาไทย' },
    ],
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'messages',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.ts',
    compilation: {
      strictMessage: false,
    },
  },

  css: [
    '~/assets/css/main.css',
    "swiper/css",
    "swiper/css/pagination",
    "swiper/css/navigation"
  ],

  app: {
    head: {
      title: 'TranEasy - AI Real-time Translation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/icon.png' },
      ],
    },
  },

  vite: {
    server: {
      allowedHosts: true,
    },
  },

  devServer: {
    host: '0.0.0.0',
  },

  compatibilityDate: '2024-11-01',
})