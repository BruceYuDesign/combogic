<template>
  <section id="hero"
    class="hero"
    >
    <div class="hero-container">
      <h1 class="com-seo">
        Combogic 櫛構科技
      </h1>
      <h2 class="hero-title"
        >
        {{ $t( 'hero.title' ) }}
      </h2>
      <h3 class="hero-subtitle">
        {{ $t( 'hero.subtitle[0]' ) }}
        <br class="block
          sm:hidden"
          >
        {{ $t( 'hero.subtitle[1]' ) }}
      </h3>
      <a class="com-btn-square"
        href="#contact"
        >
        {{ $t( 'others.getDemo' ) }}
    </a>
    </div>
    <video class="hero-video"
      :poster=" heroImage "
      width="1920"
      height="1080"
      preload="auto"
      playsinline
      autoplay
      loop
      muted
      >
      <source :src=" heroVideo "
        type="video/mp4"
        >
    </video>
  </section>
</template>

<script setup lang="ts">
import heroImage from '~/assets/hero/chapv-hero.jpg'
import heroVideo from '~/assets/hero/chapv-hero.mp4'

defineOptions({
  name: 'Hero',
  inheritAttrs: false,
})
</script>

<style scoped>
.hero {
  @apply relative w-full h-screen overflow-hidden;
}
.hero-container {
  @apply absolute top-0 right-0 bottom-0 left-0 z-10 px-4 pt-6 w-full h-full flex items-center justify-center flex-col gap-6 text-white text-center bg-black bg-opacity-50;
}
.hero-title {
  @apply text-3xl font-semibold
  md:text-4xl;
}
.hero-subtitle {
  @apply text-lg leading-loose font-normal
  md:text-xl;
}
.hero-video {
  @apply w-screen h-screen object-cover object-center;
}
</style>