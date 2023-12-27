<template>
  <div class="w-full max-w-screen-lg mx-auto relative
    md:w-5/6"
    >
    <!-- background -->
    <img class="w-full"
      :src=" imgConceptBackground "
      alt="CHAP-V減碳示意圖"
      width="1024"
      height="602"
      >
    <!-- layer -->
    <img class="concept-layer
      z-10"
      :src=" imgConceptLayer "
      alt="CHAP-V減碳示意圖"
      width="1024"
      hight="602"
      >
    <!-- animate layers -->
    <div v-for=" ({ svg , tooltip: { text , direction , position , zIndex } } , index ) in layerList "
      :key="`${ index }`"
      class="concept-layer concept-animate"
      :class="{ 'concept-animate-active' : index === conceptOrder }"
      :style="`
        z-index: ${ zIndex }
      `">
      <component
        :is=" svg "
        />
      <div class="concept-tooltip"
        :style="`
          top: ${ position.y };
          left: ${ position.x };
          transform: translateY(${ direction.vertical === 'top' ? 0.5 : -0.5 }rem);
        `">
        <h3 :style="`
            ${ direction.horizontal }: -100%;
            ${ direction.vertical }: 50%;
          `">
          {{ text }}
        </h3>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import imgConceptBackground from '~/assets/concept/chapv-background.png'
import imgConceptLayer from '~/assets/concept/chapv-layer.png'

import SvgAi from './SvgAi.vue'
import SvgIso from './SvgIso.vue'
import SvgRoute from './SvgRoute.vue'


defineOptions({
  name: 'Concept',
  inheritAttrs: false,
})

const { t } = useI18n()

interface LayerType {
  svg: Component
  tooltip: {
    text: string,
    direction: {
      vertical: 'top' | 'bottom',
      horizontal: 'left' | 'right',
    },
    position: {
      x: string,
      y: string,
    },
    zIndex: number,
  }
}
const layerList: LayerType[] = [
  {
    svg: SvgRoute,
    tooltip: {
      text: t( 'product.route' ),
      direction: {
        vertical: 'top',
        horizontal: 'left',
      },
      position: {
        x: '63%',
        y: '88%',
      },
      zIndex: 0,
    },
  },
  {
    svg: SvgIso,
    tooltip: {
      text: t( 'product.iso' ),
      direction: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      position: {
        x: '71%',
        y: '10%',
      },
      zIndex: 0,
    },
  },
  {
    svg: SvgAi,
    tooltip: {
      text: t( 'product.ai' ),
      direction: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      position: {
        x: '41%',
        y: '43%',
      },
      zIndex: 10,
    },
  },
]

const conceptInterval = ref()
const conceptOrder = ref( 0 )
const conceptCount = ref( 0 )

onMounted( () => {
  conceptCount.value = document.querySelectorAll( '.concept-animate' ).length
  conceptInterval.value = setInterval( () => {
    conceptOrder.value + 1 < conceptCount.value
      ? conceptOrder.value++
      : conceptOrder.value = 0
  } , 3500 )
})

onUnmounted( () => {
  clearInterval( conceptInterval.value )
})
</script>

<style>
/* layer */
.concept-layer {
  @apply absolute top-0 right-0 bottom-0 left-0 h-full w-full;
}

/* tooltip */
.concept-tooltip {
  @apply absolute opacity-0 duration-500 transition;
}

.concept-tooltip > span {
  @apply block w-[10px] h-[10px] bg-primary-400 rotate-45;
}

.concept-tooltip > h3 {
  @apply absolute w-[135px] px-2 py-1 text-xs text-center whitespace-normal bg-primary-400 text-white rounded
  sm:w-fit sm:text-lg sm:whitespace-nowrap;
}

/* tooltip active */
.concept-animate-active > .concept-tooltip {
  @apply opacity-100
  !translate-y-0;
}
</style>