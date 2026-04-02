<script setup lang="ts">
import logo from './assets/logo.png'
</script>

<template>
  <main class="flex min-h-screen items-center justify-center px-6 text-stone-100">
    <section class="flex flex-col items-center gap-12 text-center">
      <img :src="logo" alt="Sonique logo" class="w-24 object-contain sm:w-28" />
      <h1 class="font-display text-5xl leading-none tracking-[-0.05em]">
        sonique.
      </h1>
    </section>
  </main>
</template>
