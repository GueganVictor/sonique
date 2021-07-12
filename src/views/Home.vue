<template>
  <div
    class="
      py-8
      px-8
      max-w-sm
      mx-auto
      bg-white
      mt-50
      rounded-xl
      shadow-md
      space-y-2
      sm:(py-4
      text-center
      items-center)
    "
  >
    <p class="text-lg text-black font-semibold">{{ $t('home') }}</p>
    <button
      @click="goToAbout()"
      class="
        px-4
        py-1
        text-purple-600
        font-semibold
        rounded-full
        border border-purple-200
        hover:(text-white
        bg-purple-600
        border-transparent)
        focus:(outline-none
        ring-2 ring-purple-600 ring-offset-2)
      "
    >
      {{ $t('go-to') }} {{ $t('about') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goToAbout = () => {
  router.push({ path: '/about' })
}
</script>

<style scoped></style>
