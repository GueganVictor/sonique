<template>
  <div class="bg-orange-200 w-screen h-screen dark:(bg-dark-200)">
    <router-view />
    <footer class="border-b-2 border-dark-200 absolute bottom-0 pt-1 w-screen dark:(border-white)">
      <div class="container px-6 mx-auto w-screen">
        <div class="flex flex-col items-center">
          <div class="text-center block py-6 sm:(w-2/3)">
            <div>
              <button
                class="px-3 py-1 text-xl dark:(text-white) focus:(outline-none)"
                type="button"
                @click="toggleLanguage()"
              >
                <icon-clarity-language-line />
              </button>
              <button
                class="px-3 py-1 text-xl dark:(text-white) focus:(outline-none)"
                type="button"
                :title="$t('button.toggle_dark')"
                @click="toggleDark()"
              >
                <icon-carbon-moon v-if="isDark" />
                <icon-carbon-sun v-else />
              </button>
            </div>
            <button />
            <p class="font-bold mb-2 text-sm dark:(text-white)">© 2021 Victor GUEGAN | MIT License</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { isDark, toggleDark } from './modules/dark';
const i18n = useI18n();
const toggleLanguage = () => {
  console.log("1", i18n.locale.value)
  i18n.locale.value = i18n.locale.value === 'en' ? 'fr' : 'en'
  console.log("2", i18n.locale.value)
}
</script>
