<template>
  <header class="header"
    :class="{ 'header-active' : headerIsActive }"
    >
    <!-- overlay -->
    <div class="header-overlay"
      @click=" collapseHeader "
      >
    </div>
    <div class="com-container
      header-container"
      >
      <!-- logo -->
      <a
        class="header-head"
        :href=" localePath({
          name: 'index',
          hash: '#hero',
        }) "
        @click=" collapseHeader "
        >
        <img
          :src=" combogicLogoEn "
          alt="Combogic 櫛構科技"
          height="48"
          width="214"
          >
      </a>
      <!-- nav -->
      <nav class="header-body">
        <!-- link -->
        <ul class="header-link-list">
          <li v-for=" ({ name , href , hash }) in linkList "
            :key=" name "
            >
            <a class="com-btn-text
              header-link-item"
              :href=" localePath({
                name: href,
                hash: hash,
              }) "
              @click=" collapseHeader "
              >
              {{ name }}
            </a>
          </li>
        </ul>
        <!-- locale -->
        <button class="header-locale"
          :class="{ 'header-locale-active' : localeIsActive }"
          @click=" handleLocaleClick "
          >
          <div class="header-locale-label">
            <p class="com-seo">
              語言
            </p>
            <ClientOnly>
              <FontAwesomeIcon icon="fa-solid fa-globe" />
            </ClientOnly>
          </div>
          <div class="header-locale-list">
            <a
              v-for=" ({ code , name , iso }) in localeList "
              class="header-locale-item"
              :key=" code "
              :href=" code === 'tw' ? '/' : `/${ code }` "
              @click=" setHtmlAttr( iso ) "
              >
              {{ name }}
            </a>
          </div>
        </button>
      </nav>
      <!-- burger -->
      <button class="header-burger"
        @click=" handleBurgerClick "
        type="button"
        >
        <span></span>
        <span></span>
        <span></span>
        <p class="com-seo">
          選單
        </p>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import combogicLogoEn from '~/assets/logo/combogic-logo-en.svg'


defineOptions({
  name: 'Header',
  inheritAttrs: false,
})

const { locales } = useI18n()
const localePath = useLocalePath()

const localeList: any[] = locales.value

const setHtmlAttr = ( localeIso: string ) => {
  useHead({
    htmlAttrs: {
      lang: localeIso,
    }
  })
}

interface LinkItemType {
  name: string
  href: string
  hash: string
}
const linkList: LinkItemType[] = [
  {
    name: 'PRODUCT',
    href: 'index',
    hash: '#product',
  },
  {
    name: 'TEAM',
    href: 'index',
    hash: '#team',
  },
  {
    name: 'BLOG',
    href: 'blog',
    hash: '',
  },
  {
    name: 'CONTACT US',
    href: 'index',
    hash: '#contact',
  },
]

const headerIsActive = ref( false )
const handleBurgerClick = () => {
  headerIsActive.value = !headerIsActive.value
}

const collapseHeader = () => {
  headerIsActive.value = false
}

const localeIsActive = ref( false )
const handleLocaleClick = () => {
  localeIsActive.value = !localeIsActive.value
}
</script>

<style scoped>
.header {
  @apply fixed left-0 top-0 z-50 w-full bg-secondary-100;
}
.header-container {
  @apply mx-auto py-2 flex justify-between items-center bg-inherit text-sm font-semibold;
}
.header-head {}
.header-body {
  @apply w-full h-screen pb-28 absolute -right-full bottom-0 translate-y-full translate-x-0 flex flex-col gap-3 bg-inherit overflow-y-auto
  sm:w-1/3 sm:-right-1/3
  lg:w-fit lg:h-fit lg:static lg:pb-0 lg:flex-row lg:translate-x-0 lg:translate-y-0 lg:border-y-0 lg:overflow-y-visible;
}
.header-active > .header-container > .header-body {
  @apply -translate-x-full
  lg:translate-x-0;
}

/* link */
.header-link-list {
  @apply flex flex-col items-center gap-4 py-4 pr-0 border-y border-y-secondary-200 border-r-0 border-r-secondary-200
  lg:flex-row lg:py-0 lg:pr-5 lg:border-r-2 lg:border-y-0
}
.header-link-item {}

/* locale */
.header-locale {
  @apply relative flex items-center justify-center bg-inherit;
}
.header-locale-active > div:last-child {
  @apply lg:flex;
}
.header-locale-label {
  @apply hidden px-2 py-1 transition
  hover:fill-primary-400
  lg:block;
}
.header-locale-label > svg {
  @apply w-5 h-5 text-secondary-400;
}
.header-locale-list {
  @apply static translate-y-0 flex flex-col gap-2 bg-transparent shadow-none
  lg:hidden lg:absolute lg:left-1/2 lg:bottom-0 lg:translate-y-[calc(100%+8px)] lg:-translate-x-1/2 lg:gap-0 lg:shadow-sm lg:rounded-lg lg:bg-white;
}
.header-locale-list::before {
  content: '';
  @apply hidden bg-inherit w-3 h-3 rotate-45 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10
  lg:block;
}
.header-locale-item {
  @apply w-full px-8 py-2 text-center text-secondary-400 transition
  first:rounded-t-lg
  last:rounded-b-lg
  hover:text-primary-400
  lg:hover:bg-primary-100;
}
.header-locale-item + .header-locale-item {
  @apply border-t-secondary-100
  lg:border-t;
}

/* burger */
.header-burger {
  @apply relative block h-8 w-8
  lg:hidden;
}
.header-burger > span {
  @apply bg-secondary-400 h-0.5 absolute left-0 right-0 top-0 bottom-0 m-auto pointer-events-none;
}
.header-burger > span:nth-child( 1 ) {
  @apply translate-y-3;
}
.header-burger > span:nth-child( 3 ) {
  @apply -translate-y-3;
}

.header-active > .header-container > .header-burger > span:nth-child( 1 ) {
  @apply translate-y-0 rotate-45;
}
.header-active > .header-container > .header-burger > span:nth-child( 2 ) {
  @apply opacity-0;
}
.header-active > .header-container > .header-burger > span:nth-child( 3 ) {
  @apply -translate-y-0 -rotate-45;
}

/* overlay */
.header-overlay {
  @apply absolute left-0 bottom-0 translate-y-full w-screen h-screen bg-black opacity-0 pointer-events-none;
}
.header-active > .header-overlay {
  @apply opacity-50 pointer-events-auto
  lg:opacity-0 lg:pointer-events-none;
}

/* animation */
.header-container,
.header-burger > span,
.header-overlay {
  @apply transition duration-300;
}
</style>