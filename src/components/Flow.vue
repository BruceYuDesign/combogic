<template>
  <ul class="com-container
    flow-list"
    >
    <li v-for=" ({ icon , title , beforeList , afterList , afterSlot }) in flowList "
      class="flow"
      >
      <div class="flow-head">
        <div class="flow-img-shape">
          <img class="flow-img"
            :src=" icon "
            :alt=" title "
            height="48"
            width="48"
            >
        </div>
        <h3 class="flow-title">
          {{ title }}
        </h3>
      </div>
      <div class="flow-body">
        <div class="com-card
          flow-body-container"
          >
          <div class="flow-before-content">
            <p class="flow-before-label">
              {{ beforeLabel }}
            </p>
            <ul class="flow-before-list">
              <li v-for=" beforeItem in beforeList ">
                {{ beforeItem }}
              </li>
            </ul>
          </div>
          <div class="flow-after-content">
            <p class="flow-after-label">
              {{ afterLabel }}
            </p>
            <div v-if=" afterSlot "
              v-html=" afterSlot "
              >
            </div>
            <ul class="flow-after-list">
              <li v-for=" afterItem in afterList ">
                {{ afterItem }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Flow',
  inheritAttrs: false,
})

export interface FlowType {
  icon: string
  title: string
  beforeList: Array<string>
  afterList: Array<string>
  afterSlot?: string
}

defineProps({
  beforeLabel: {
    type: String,
    default: 'Before',
  },
  afterLabel: {
    type: String,
    default: 'After',
  },
  flowList: {
    type: Array<FlowType>,
    required: true,
  }
})
</script>

<style scoped>
.flow-list {
  @apply mx-auto grid grid-cols-1
  xl:grid-cols-4;
}
.flow {
  @apply flex flex-row items-center gap-6
  xl:flex-col xl:gap-4;
}

/* flow-head ---------------------------------------- */

/* flow title */
.flow-head {
  @apply relative w-fit h-full p-2 pt-8 flex flex-col items-center justify-center gap-2 overflow-x-clip overflow-y-visible
  xl:p-2 xl:pl-8 xl:w-full xl:h-fit xl:flex-row xl:overflow-y-clip xl:overflow-x-visible;
}
.flow-img-shape {
  @apply w-10 h-10 grid place-items-center rounded-full bg-primary-100 z-20;
}
.flow-img {
  @apply w-6 h-6
  min-w-[1.5rem] min-h-[1.5rem];
}

/* text direction */
.flow-title {
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  @apply font-semibold text-xl z-20 whitespace-nowrap;
}
@media (min-width: 1280px) {
  .flow-title {
    writing-mode: unset;
    -webkit-writing-mode: unset;
  }
}

/* color */
.flow:not(:last-child) > .flow-head {
  @apply bg-secondary-50 text-primary-500;
}
.flow:last-child > .flow-head {
  @apply bg-primary-400 text-white;
}

/* head's arrow */
.flow-head::after {
  @apply absolute rotate-45 bg-inherit border-secondary-200 border-t-0 border-r-8 border-b-8 z-10;
  content: "";
  --size:  3rem;
  right:   calc( 50% - var( --size ) / 2 );
  bottom:  calc( 0%  - var( --size ) / 3 );
  height:  var( --size );
  width:   var( --size );
}
@media (min-width: 1280px) {
  .flow-head::after {
    @apply border-t-8 border-r-8 border-b-0;
    right:  calc( 0%  - var( --size ) / 3 );
    bottom: calc( 50% - var( --size ) / 2 );
  }
}

/* flow-body ---------------------------------------- */

/* before & after */
.flow-body {
  @apply py-4 w-full h-full
  xl:px-4;
}
.flow-body-container {
  @apply relative w-full h-full p-4 flex flex-col
  sm:flex-row
  xl:flex-col;
}
.flow-before-content,
.flow-after-content {
  @apply w-full px-2 py-4 flex flex-col items-center gap-2
  sm:px-6 sm:py-2
  xl:px-2 xl:py-4;
}
.flow-before-label,
.flow-after-label {
  @apply font-semibold text-xl;
}
.flow-before-list,
.flow-after-list {
  @apply w-full list-disc list-inside leading-loose text-base ml-8 -indent-[1.4rem];
}

/* before */
.flow-before-content {
  @apply border-r-0 border-b border-primary-200
  sm:border-r sm:border-b-0 
  xl:border-r-0 xl:border-b;
}
.flow-before-label {
  @apply text-secondary-400;
}
.flow-before-list {
  @apply text-secondary-400;
}

/* after */
.flow-after-label {
  @apply text-primary-400;
}
.flow-after-list {
  @apply text-secondary-600;
}

/* body's arrow */
.flow-body-container::after {
  @apply absolute rounded-md rotate-45 bg-inherit;
  content: "";
  --size:  30px;
  top:     calc( 50% - var( --size ) / 2 );
  left:    calc( 0%  - var( --size ) / 3 );
  height:  var( --size );
  width:   var( --size );
}
@media (min-width: 1280px) {
  .flow-body-container::after {
    top:  calc( 0%  - var( --size ) / 3 );
    left: calc( 50% - var( --size ) / 2 );
  }
}
</style>