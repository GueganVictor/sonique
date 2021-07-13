<template>
  <div class="dark:bg-dark-200 bg-orange-200 h-screen w-screen">
    <router-view></router-view>
    <footer class="absolute bottom-0 w-screen pt-1 border-b-2 border-dark-200 dark:border-white">
      <div class="container w-screen mx-auto px-6">
        <div class="flex flex-col items-center">
          <div class="sm:w-2/3 text-center block py-6">
            <div>
              <button
                class="text-xl px-3 py-1 dark:text-white focus:outline-none"
                type="button"
                @click="$i18n.locale = $i18n.locale === 'en' ? 'fr' : 'en'"
              >
                <icon-clarity-language-line></icon-clarity-language-line>
              </button>
              <button
                class="dark:text-white text-xl px-3 py-1 focus:outline-none"
                type="button"
                :title="$t('button.toggle_dark')"
                @click="toggleDark()"
              >
                <icon-carbon-moon v-if="isDark" />
                <icon-carbon-sun v-else />
              </button>
            </div>
            <button></button>
            <p class="text-sm dark:text-white font-bold mb-2">© 2021 Victor GUEGAN | MIT License</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from './modules/dark'
</script>

<style></style>
