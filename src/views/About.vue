<template>
  <div
    class="
      py-8
      px-8
      max-w-sm
      mx-auto
      mt-50
      rounded-xl
      shadow-md
      space-y-2
      sm:(py-4
      text-center
      items-center)
      dark:(text-light-50
      shadow-transparent)
    "
  >
    <p class="text-lg font-semibold">{{ $t('about') }}</p>
    <button
      @click="goToHome()"
      class="
        px-4
        py-1
        text-green-400
        font-semibold
        rounded-full
        border border-green-200
        hover:(text-white
        bg-green-400
        border-transparent)
        focus:(outline-none
        ring-2 ring-green-400 ring-offset-2)
      "
    >
      {{ $t('go-to') }} {{ $t('home') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goToHome = () => {
  router.push({ path: '/' })
}
</script>

<style scoped></style>
