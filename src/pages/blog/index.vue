<template>
  <div class="com-wrapper
    bg-secondary-100"
    >

    <!-- title -->
    <h1 class="com-seo">
      {{ $t( 'blog.title.more' ) }}
    </h1>

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

    <!-- blog list -->
    <div class="com-container
      mt-6 grid grid-cols-1 gap-x-6 gap-y-8
      md:grid-cols-2
      xl:grid-cols-3"
      >
      <ContentList>
        <BlogCard
          v-for=" { title , description , image , href } in blogList "
          :key=" title "
          :title=" title "
          :description=" description "
          :image=" image "
          :href=" href "
          />
      </ContentList>
    </div>

  </div>
</template>

<script setup lang="ts">
import { BlogCardType } from '~/components/BlogCard.vue'


const localePath = useLocalePath()
const { locale , t } = useI18n()

// head meta
useHeadConfig({
  title: t( 'pageHead.blogs.title' ),
  description: t( 'pageHead.blogs.desc' ),
})

// blog list
const blogResult = await queryContent( locale.value )
  .sort({ date: -1 })
  .find()

const blogList: BlogCardType[] = useBlogInfo( blogResult )
</script>