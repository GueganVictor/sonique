import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import ViteWindiCSS from "vite-plugin-windicss";
import VitevueI18n from "@intlify/vite-plugin-vue-i18n";
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteWindiCSS(),
    vueI18n({
      include: path.resolve(__dirname, './src/assets/locales/**'),
    }),
    Icons(),
    Components({
      resolvers: [IconsResolver({ componentPrefix: 'icon' })],
    }),
    VitevueI18n({
      include: './src/assets/locales/',
    }),
  ],
});
