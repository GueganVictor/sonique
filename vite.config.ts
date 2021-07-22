import VitevueI18n from '@intlify/vite-plugin-vue-i18n';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import ViteComponents from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import ViteWindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteWindiCSS(),
    ViteIcons(),
    ViteComponents({
      customComponentResolvers: [ViteIconsResolver({ componentPrefix: 'icon' })],
    }),
    VitevueI18n({
      include: './src/assets/locales/',
    }),
  ],
});
