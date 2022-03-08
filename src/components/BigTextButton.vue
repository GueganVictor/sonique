<template>
  <button
    class="font-medium rounded-full border-2 border-dark-200 container px-10 py-4 hover:(bg-dark-200 text-orange-100) focus:(outline-transparent)"
  >{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: 'Button',
  },
});
</script>
