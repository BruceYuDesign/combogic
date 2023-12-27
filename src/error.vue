<template>
  <div class="w-screen h-screen grid place-items-center bg-secondary-200">
    <div class="com-card
      mx-auto w-11/12 max-w-sm py-12 px-6 flex flex-col gap-4 items-center
      sm:px-12"
      >
      <h2 class="text-primary-500 font-bold text-6xl">
        {{ error.statusCode }}
      </h2>
      <p class="text-secondary-500">
        {{ error.statusMessage }}
      </p>
      <hr class="border-slate-300 w-full mt-4 mb-2"/>
      <a class="com-btn-square"
        :href=" localePath( '/' ) "
        >
        {{ $t( 'others.toHome' ) }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const localePath = useLocalePath()

useHead({
  title: 'ERROR',
  meta: [
    { name: 'robots' , content: 'noindex, nofollow' }
  ]
})
</script>