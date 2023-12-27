<template>
  <div class="com-card
    member-card"
    :class="{ 'member-card-active' : memberIsActive }"
    @click=" handleClick "
    @mouseenter=" handelMouseEnter "
    @mouseleave=" handleMouseLeave "
    >
    <div class="member-card-container">
      <div class="member-avatar-outline">
        <img :src=" avatar "
          :alt=" name "
          width="160"
          height="160"
          >
      </div>
      <h3 class="member-name">
        {{ name }}
      </h3>
      <p class="member-job">
        {{ jobTitle }}
      </p>
    </div>
    <div class="member-card-overlay">
      <ul>
        <li v-for=" experience in experienceList "
          class="member-experience"
          >
          {{ experience }}
        </li>
      </ul>
      <p class="member-profession">
        {{ profession }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MemberCard',
  inheritAttrs: false,
})

export interface MemberCardType {
  avatar: string
  name: string
  jobTitle: string
  experienceList: Array<string>
  profession: string
}

defineProps({
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  experienceList: {
    type: Array<String>,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
})

const memberIsActive = ref( false )
// const isMobile = useNuxtApp().$isMobile
const { isMobile } = useUserAgent()
const handleClick = () => {
  isMobile() && ( memberIsActive.value = !memberIsActive.value )
}
const handelMouseEnter = () => {
  isMobile() || ( memberIsActive.value = true )
}
const handleMouseLeave = () => {
  isMobile() || ( memberIsActive.value = false )
}
</script>

<style scoped>
.member-card {
  @apply relative h-full text-center;
}
.member-card-container,
.member-card-overlay {
  @apply px-2 py-10 flex flex-col items-center gap-4 pointer-events-none;
}

/* static */
.member-avatar-outline {
  @apply w-full max-w-[150px] aspect-square bg-secondary-200/50 rounded-full overflow-hidden;
}
.member-name {
  @apply text-2xl text-primary-400 font-semibold;
}
.member-job {
  @apply text-base text-secondary-400 font-semibold;
}

/* overlay */
.member-card-overlay {
  @apply justify-center rounded-2xl absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-inherit opacity-0 transition;
}
.member-experience {
  @apply flex flex-col gap-3 text-secondary-600 text-center;
}
.member-profession {
  @apply text-primary-500 font-semibold;
}

.member-card-active > .member-card-overlay {
  @apply opacity-90;
}
</style>