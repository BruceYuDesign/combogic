<template>
  <div class="com-container com-card
    carousel-container"
    >
    <div ref="carouselId"
      class="carousel-btn-list"
      >
    </div>
    <Swiper
      :slides-per-view=" 1 "
      :space-between=" 20 "
      :loop=" true "
      :autoplay="{
        delay: duration || 5000,
      }"
      :pagination="{
        el: carouselId,
        clickable: true,
        renderBullet: ( index: number , className: string ) =>
          renderCarouselBtn( carouselList[ index ].title , className ),
      }"
      >
      <SwiperSlide v-for=" ({ image , title , description }) in carouselList "
        :key=" title "
        class="carousel-slide"
        >
        <img class="carousel-img"
          :src=" image "
          :alt=" title "
          width="640"
          height="427"
          >
          <h3 class="carousel-title">
            {{ title }}
          </h3>
          <p class="carousel-desc">
            {{ description }}
          </p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import 'swiper/css'


defineOptions({
  name: 'Carousel',
  inheritAttrs: false,
})

export interface CarouselType {
  image: string
  title: string
  description: string
}

defineProps({
  duration: {
    type: Number,
  },
  carouselList: {
    type: Array<CarouselType>,
    required: true,
  }
})

register()

const carouselId = ref( `carousel-${ Math.random().toString( 36 ).substring( 7 ) }` )

const renderCarouselBtn = ( title: string , className: string ): string => (`
  <span class="carousel-btn ${ className }">
    ${ title }
  </span>
`)
</script>

<style>
.carousel-container {
  @apply mx-auto p-4 flex flex-col-reverse gap-4
  sm:gap-8 sm:p-8
  md:flex-row;
}
.carousel-container > .swiper {
  @apply w-full;
}

.carousel-slide {
  @apply w-full flex flex-col gap-2 p-0;
}
.carousel-img {
  @apply w-full max-w-screen-sm mx-auto rounded-xl;
}
.carousel-title {
  @apply text-primary-500 text-xl font-semibold leading-loose;
}
.carousel-desc {
  @apply text-secondary-500 text-base leading-loose;
}

.carousel-btn-list {
  @apply min-h-full min-w-[14rem] w-full flex flex-row justify-center pr-0 border-r-secondary-200 border-r-0 gap-1.5
  md:pr-8 md:border-r md:flex-col md:justify-start md:gap-4 md:max-w-fit;
}
.carousel-btn {
  @apply w-[8px] h-[8px] text-base text-left whitespace-normal text-transparent bg-secondary-200 opacity-100 overflow-hidden rounded-md cursor-pointer
  md:w-full md:max-w-xs md:h-auto md:px-4 md:py-2 md:text-secondary-400;
}
.carousel-btn.swiper-pagination-bullet-active {
  @apply bg-primary-400
  md:text-white;
}
</style>