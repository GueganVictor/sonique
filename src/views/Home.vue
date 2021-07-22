<template>
  <div class="flex content-center justify-center h-full items-center">
    <div
      class="max-w-lg shadow-lg bg-orange-100 text-center md:min-w-150 px-15 py-10 rounded-md"
    >
      <p class="text-4xl font-semibold">
        {{ $t('home') }}
      </p>
      <div class="pt-5">
        <BigTextButton :text="$t('go-to') + ' ' + $t('about')" @click="goToAbout()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import BigTextButton from '../components/BigTextButton.vue';
const router = useRouter();
const goToAbout = () => {
  router.push({ path: '/about' });
};
</script>
