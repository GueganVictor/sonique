<template>
  <div class="flex content-center justify-center h-full items-center">
    <div
      class="max-w-lg shadow-lg bg-orange-100 text-center md:min-w-150 px-15 py-10 rounded-md"
    >
      <p class="text-4xl font-semibold">
        {{ $t('about') }}
      </p>
      <div class="pt-5">
        <BigTextButton :text="$t('go-to') + ' ' + $t('home')" @click="goToHome()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BigTextButton from '../components/BigTextButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goToHome = () => {
  router.push({ path: '/' });
};
</script>
