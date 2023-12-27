<template>
  <NuxtLayout
    :name=" layout "
    >
    <NuxtPage/>
    <NuxtLoadingIndicator
      color="#0EA5E9"
      :height=" 4 "
      />
  </NuxtLayout>
</template>

<script setup>
const i18nHead = useLocaleHead({
  addSeoAttributes: {}
})

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang
  }
})

const layout = 'basic'
</script>