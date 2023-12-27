<template>
  <footer class="footer">
    <span class="com-container
      footer-container"
      >
      Copyright
      {{ thisYear }}
      &copy;
      <a class="footer-link"
        :href=" localePath( '/' ) "
        >
        Combogic Technology Co., Ltd.
      </a>
      <br class="block
        sm:hidden"
        >
      &MediumSpace;All Rights Reserved.
    </span>
  </footer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Footer',
  inheritAttrs: false,
})

const localePath = useLocalePath()
const thisYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  @apply w-full py-6 bg-secondary-950;
}
.footer-container {
  @apply block mx-auto text-sm text-center text-secondary-400
  sm:text-base;
}
.footer-link {
  @apply underline transition
  hover:text-primary-400;
}
</style>