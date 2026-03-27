
// @ts-nocheck


export const localeCodes =  [
  "zh",
  "en",
  "es",
  "pt",
  "id",
  "ja",
  "ko",
  "fr",
  "de",
  "vi",
  "th"
]

export const localeLoaders = {
  "zh": [{ key: "../messages/zh.json", load: () => import("../messages/zh.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_zh_json" */), cache: true }],
  "en": [{ key: "../messages/en.json", load: () => import("../messages/en.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_en_json" */), cache: true }],
  "es": [{ key: "../messages/es.json", load: () => import("../messages/es.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_es_json" */), cache: true }],
  "pt": [{ key: "../messages/pt.json", load: () => import("../messages/pt.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_pt_json" */), cache: true }],
  "id": [{ key: "../messages/id.json", load: () => import("../messages/id.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_id_json" */), cache: true }],
  "ja": [{ key: "../messages/ja.json", load: () => import("../messages/ja.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_ja_json" */), cache: true }],
  "ko": [{ key: "../messages/ko.json", load: () => import("../messages/ko.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_ko_json" */), cache: true }],
  "fr": [{ key: "../messages/fr.json", load: () => import("../messages/fr.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_fr_json" */), cache: true }],
  "de": [{ key: "../messages/de.json", load: () => import("../messages/de.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_de_json" */), cache: true }],
  "vi": [{ key: "../messages/vi.json", load: () => import("../messages/vi.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_vi_json" */), cache: true }],
  "th": [{ key: "../messages/th.json", load: () => import("../messages/th.json" /* webpackChunkName: "locale__Users_lichunlei_Desktop_PersonalProjects_traneasy_website_messages_th_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "zh",
      "name": "简体中文",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/zh.json"
      ]
    },
    {
      "code": "en",
      "name": "English",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/en.json"
      ]
    },
    {
      "code": "es",
      "name": "Español",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/es.json"
      ]
    },
    {
      "code": "pt",
      "name": "Português",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/pt.json"
      ]
    },
    {
      "code": "id",
      "name": "Indonesia",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/id.json"
      ]
    },
    {
      "code": "ja",
      "name": "日本語",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/ja.json"
      ]
    },
    {
      "code": "ko",
      "name": "한국어",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/ko.json"
      ]
    },
    {
      "code": "fr",
      "name": "Français",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/fr.json"
      ]
    },
    {
      "code": "de",
      "name": "Deutsch",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/de.json"
      ]
    },
    {
      "code": "vi",
      "name": "Tiếng Việt",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/vi.json"
      ]
    },
    {
      "code": "th",
      "name": "ภาษาไทย",
      "files": [
        "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/th.json"
      ]
    }
  ],
  "defaultLocale": "zh",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix",
  "lazy": true,
  "langDir": "messages",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "zh",
    "name": "简体中文",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/zh.json"
      }
    ]
  },
  {
    "code": "en",
    "name": "English",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/en.json"
      }
    ]
  },
  {
    "code": "es",
    "name": "Español",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/es.json"
      }
    ]
  },
  {
    "code": "pt",
    "name": "Português",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/pt.json"
      }
    ]
  },
  {
    "code": "id",
    "name": "Indonesia",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/id.json"
      }
    ]
  },
  {
    "code": "ja",
    "name": "日本語",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/ja.json"
      }
    ]
  },
  {
    "code": "ko",
    "name": "한국어",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/ko.json"
      }
    ]
  },
  {
    "code": "fr",
    "name": "Français",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/fr.json"
      }
    ]
  },
  {
    "code": "de",
    "name": "Deutsch",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/de.json"
      }
    ]
  },
  {
    "code": "vi",
    "name": "Tiếng Việt",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/vi.json"
      }
    ]
  },
  {
    "code": "th",
    "name": "ภาษาไทย",
    "files": [
      {
        "path": "/Users/lichunlei/Desktop/PersonalProjects/traneasy-website/messages/th.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
