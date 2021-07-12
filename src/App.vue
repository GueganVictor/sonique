<template>
  <nav
    class="
      relative
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      navbar-expand-lg
      bg-purple-500
      mb-3
    "
  >
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between px-4">
        <a
          class="
            text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-no-wrap
            uppercase
            text-white
          "
        >
          {{ $t('app-name') }}
        </a>
        <button
          class="
            text-white
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            outline-none
            focus:outline-none
          "
          type="button"
          @click="$i18n.locale = $i18n.locale === 'en' ? 'fr' : 'en'"
        >
          <icon-cif-fr v-if="$i18n.locale === 'fr'"></icon-cif-fr>
          <icon-cif-gb v-if="$i18n.locale === 'en'"></icon-cif-gb>
        </button>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style></style>
