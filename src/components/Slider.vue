<template>
  <div class="slider-container">
    <Swiper
      class="com-container"
      @swiper=" getSliderRef "
      :slides-per-view=" 1 "
      :space-between=" 0 "
      :pagination=" true "
      :breakpoints=" breakpoints "
      >
      <SwiperSlide
        v-for=" ( sliderItem , index ) in sliderList "
        :key=" index "
        >
        <component
          :is=" component "
          v-bind=" sliderItem "
          />
      </SwiperSlide>
    </Swiper>
    <!-- prev -->
    <button class="slider-btn-prev"
      @click=" slider.slidePrev() "
      type="button"
      >
      <ClientOnly>
        <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" />
      </ClientOnly>
    </button>
    <!-- next -->
    <button class="slider-btn-next"
      @click=" slider.slideNext() "
      type="button"
      >
      <ClientOnly>
        <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />
      </ClientOnly>
    </button>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'

defineOptions({
  name: 'Slider',
  inheritAttrs: false,
})

const slider = ref()
const getSliderRef = ( swiperInstance: object ) => {
  slider.value = swiperInstance
}

type SpecificNumbers = 640 | 768 | 1024 | 1280 | 1536
export type BreakpointsType = Partial<Record<SpecificNumbers, any>>

defineProps({
  sliderList: {
    type: Array<Object>,
    required: true,
  },
  component: {
    type: Object as PropType<any>,
    required: true,
  },
  breakpoints: {
    type: Object as PropType<BreakpointsType>,
    default: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 5,
      },
    },
  },
})
</script>

<style>
.slider-container {
  @apply w-full flex flex-row items-center justify-center gap-0   
  sm:gap-4;
}

.slider-container > .swiper {
  @apply order-2
  !mx-0;
}

.slider-container > .swiper > .swiper-wrapper {
  @apply flex flex-row;
}

/* swiper卡片 */
.swiper-slide {
  @apply h-auto px-2 py-4
  sm:px-3;
}

/* swiper頁碼 */
.slider-container .swiper-pagination {
  @apply mt-4 static flex flex-row justify-center gap-1.5;
}
.slider-container .swiper-pagination-bullet {
  @apply block w-[8px] h-[8px] rounded-full bg-secondary-300;
}
.slider-container .swiper-pagination-bullet-active {
  @apply bg-primary-400;
}

/* swiper左右鍵 */
.slider-container .slider-btn-prev,
.slider-container .slider-btn-next {
  @apply text-2xl text-secondary-300 transition
  hover:text-primary-400;
}
.slider-container .slider-btn-prev {
  @apply order-1;
}
.slider-container .slider-btn-next {
  @apply order-3;
}
@media ( max-width: 639px ) {
  .slider-container .slider-btn-prev,
  .slider-container .slider-btn-next {
    @apply hidden;
  }
}
</style>