<template>
  <label class="field-wrapper"
    :class=" className "
    >
    <div class="field-head">
      <strong v-if=" required "
        class="field-required"
        >
        *
      </strong>
      <span class="field-label">
        {{ label }}
      </span>
      <span v-if=" warning "
        class="field-warning"
        >
        <ClientOnly>
          <FontAwesomeIcon icon="fa-solid fa-circle-exclamation"/>
        </ClientOnly>
        {{ warning }}
      </span>
    </div>
    <component
      class="field"
      :is=" htmlTag "
      :value=" modelValue "
      @input=" handleInput "
      v-bind=" $attrs "
      />
  </label>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Field',
  inheritAttrs: false,
})

defineProps({
  htmlTag: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  warning: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [ String , Number ],
    default: '',
  },
  className: {
    type: String,
  }
})

const emit = defineEmits([ 'update:modelValue' ])
const handleInput = ( event: any ) => {
  emit( 'update:modelValue' , event.target.value )
}
</script>

<style scoped>
.field-wrapper {
  @apply h-fit w-full flex flex-col gap-1 text-sm;
}
.field-head {
  @apply inline
}
.field-required {
  @apply w-fit text-danger-500;
}
.field-label {
  @apply mr-2 w-fit text-secondary-200;
}
.field-warning {
  @apply w-fit text-danger-500;
}
.field {
  @apply w-full p-2 text-secondary-600 bg-secondary-100 rounded outline-none;
}
</style>