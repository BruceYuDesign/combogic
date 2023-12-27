const BASE_URL = 'https://combogic.com'
const GTM_ID = 'GTM-NMVZXSN'
const GTAG_ID = 'G-2G8HLRWML6'
const HOTJAR_ID = '3255999'
const HOTJAR_SV = '6'


export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    public: {
      BASE_URL,
      EMAILJS: {
        SERVICE_ID: 'service_6itzjbh',
        TEMPLATE_ID: 'template_wuh5nji',
        PUBLIC_KEY: '1lG0MNj65ijuE4D4f',
      } 
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-gtag',
  ],
  i18n: {
    baseUrl: BASE_URL,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'tw',
    locales: [
      {
        code: 'tw',
        iso: 'zh-Hant-TW',
        name: '中文',
        file: 'tw.json',
        dir: 'ltr'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
        dir: 'ltr'
      },
    ],
  },
  css: [
    '~/assets/css/style.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  gtm: {
    id: GTM_ID,
  },
  gtag: {
    id: GTAG_ID,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW',
        class: 'scroll-smooth'
      },
      title: 'Combogic Tech. 櫛構科技',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport' , content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
        { name: 'copyright', content: `Copyright ${ new Date().getFullYear() } © Combogic Technology Co., Ltd. All Rights Reserved.` },
        { name: 'og:image' , content: `${ BASE_URL }/images/combogic.png` },
        { name: 'og:title' , content: 'Combogic Tech. 櫛構科技' },
        { name: 'og:site_name', content: 'Combogic Tech. 櫛構科技' },
        { name: 'twitter:title', content: 'Combogic Tech. 櫛構科技' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'sitemap' , type: 'application/xml' , title: 'Sitemap' , href: `${ BASE_URL }/sitemap.xml` }
      ],
      script: [
        {
          innerHTML: (
            `(function(h,o,t,j,a,r){` +
            `h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};` +
            `h._hjSettings={hjid:${ HOTJAR_ID },hjsv:${ HOTJAR_SV }};` +
            `a=o.getElementsByTagName('head')[0];` +
            `r=o.createElement('script');r.async=1;` +
            `r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;` +
            `a.appendChild(r);` +
            `})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
          )
        }
      ],
    },
  },
})
