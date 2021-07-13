<template>
  <button
    class="
      rounded-full
      font-medium
      px-10
      py-4
      border-dark-200 border-2
      hover:(bg-dark-200
      text-orange-100)
      focus:outline-transparent
    "
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
})
</script>

<style scoped></style>
