import { createI18n } from 'vue-i18n';
import en from '../assets/locales/en.json';
import fr from '../assets/locales/fr.json';

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'fr', // set fallback locale
  globalInjection: true,
  messages: {
    en,
    fr,
  },
});

export default i18n;
