import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
//* sections
import tr from './locales/tr.json';
import en from './locales/en.json';
import de from './locales/de.json';

const resources = {
  en: {
    translation: {
      ...en,
    },
  },
  tr: {
    translation: {
      ...tr,
    },
  },
  de: {
    translation: {
      ...de,
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
