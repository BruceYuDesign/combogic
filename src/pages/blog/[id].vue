<template>
  <!-- blog wrapper -->
  <div class="com-wrapper
    bg-secondary-100"
    >

    <!-- back to home -->
    <a class="com-container
      flex flex-row items-center gap-2 text-lg text-primary-500 fill-primary-500 transition
      hover:text-primary-400 hover:fill-primary-400"
      :href=" localePath( '/' ) "
      >
      <ClientOnly>
        <FontAwesomeIcon
          class="w-6 h-6"
          icon="fa-solid fa-home"
          />
      </ClientOnly>
      {{ $t( 'others.toHome' ) }}
    </a>

    <!-- blog content -->
    <article id="content"
      class="com-container com-card
      mt-6 px-4 py-8
      sm:px-8"
      >
      <h1>
        {{ blogResult.title }}
      </h1>
      <span>
        {{ moment( blogResult.date ).format( 'YYYY-MM-DD' ) }}
      </span>
      <figure v-if=" blogResult.image ">
        <img
          :src=" blogResult.image "
          :alt=" blogResult.title " 
          width="736"
          height="414"
          >
        <figcaption>
          {{ blogResult.imageDesc }}
          <a v-if=" blogResult.imageLink "
            :href=" blogResult.imageLink "
            target="_blank"
            >
            {{ $t( 'blog.imageSource' ) }}
          </a>
        </figcaption>
      </figure>
      <ContentRendererMarkdown
        :value=" blogResult "
        />
    </article>
  </div>

  <!-- blog list -->
  <div class="com-wrapper
    bg-secondary-200"
    >
    <h2 class="com-container com-title">
      {{ $t( 'blog.title.more' ) }}
    </h2>
    <Slider
      :slider-list=" blogList "
      :component=" BlogCard "
      :breakpoints="{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }"
      />
    <a class="com-btn-square
      mx-auto mt-4"
      :href=" localePath( '/blog' )"
      >
      {{ $t( 'blog.readMore' ) }}
    </a>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment'
import BlogCard , { BlogCardType } from '~/components/BlogCard.vue'


const { locale } = useI18n()
const localePath = useLocalePath()

const { path , params: { id: blogId } } = useRoute()
const blogPath = `/${ locale.value }/${ blogId }`

// this blog
const blogResult = ref()

try{
  blogResult.value = await queryContent( locale.value )
    .where({ _path: { $eq: blogPath } })
    .findOne()
}
catch( error ) {
  showError({
    statusCode: 404,
    statusMessage: `Page not found: ${ path }`
  })
}

// head meta
useHeadConfig({
  title: blogResult.value.title,
  description: blogResult.value.description,
  image: blogResult.value.image,
})

// blog list
const blogListResult = await queryContent( locale.value )
  .where({ _path: { $not: blogPath } })
  .sort({ date: -1 })
  .limit( 5 )
  .find()

const blogList: BlogCardType[] = useBlogInfo( blogListResult )
</script>

<style>
/* title ---------------------------------------- */
#content h1,
#content h2,
#content h3 {
  @apply font-semibold text-primary-600
  !leading-normal;
}

/* zh-Hant-TW */
#content:lang( zh-Hant-TW ) h1 {
  @apply text-3xl
  sm:text-5xl;
}

#content:lang( zh-Hant-TW ) h2 {
  @apply text-2xl
  sm:text-3xl;
}

#content:lang( zh-Hant-TW ) h3 {
  @apply text-lg
  sm:text-xl;
}

/* en-US */
#content:lang( en-US ) h1 {
  @apply text-2xl
  sm:text-4xl;
}

#content:lang( en-US ) h2 {
  @apply text-2xl
  sm:text-3xl;
}

#content:lang( en-US ) h3 {
  @apply text-lg
  sm:text-xl;
}

/* desc ---------------------------------------- */
#content {
  @apply text-base leading-loose text-left text-secondary-600
  sm:text-xl sm:leading-loose;
}

#content p {
  @apply my-4;
}

#content a {
  @apply text-primary-500 underline-offset-4
  hover:underline;
}

#content span {
  @apply font-semibold text-secondary-400;
}

/* list ---------------------------------------- */
#content ol {
  @apply list-decimal list-outside pl-8 my-2 leading-loose;
}

#content ul {
  @apply list-disc list-outside pl-8 my-2 leading-loose;
}

/* figcaption ---------------------------------------- */
#content figure {
  @apply py-12;
}

#content figcaption {
  @apply py-0 text-sm text-center text-secondary-500;
}

/* img ---------------------------------------- */
#content img {
  @apply mx-auto my-6 w-full max-w-3xl rounded-xl;
}

#content img.full {
  @apply mx-auto my-6 w-full max-w-7xl rounded-xl;
}

#content img.medium {
  @apply mx-auto my-6 w-1/2 max-w-3xl rounded-xl;
}

#content img.small {
  @apply mx-auto my-6 w-1/3 max-w-3xl rounded-xl;
}

#content img.tiny {
  @apply mx-auto my-6 w-1/5 max-w-3xl rounded-xl;
}

/* other ---------------------------------------- */
#content hr {
  @apply my-6 border-secondary-300;
}
</style>