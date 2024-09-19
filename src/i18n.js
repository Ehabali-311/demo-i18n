import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import arTranslation from './locales/ar/translation.json';
import enTranslation from './locales/en/translation.json';
import backend from 'i18next-http-backend';
i18n.use(initReactI18next)
.use(backend)
.use(LanguageDetector)
.init({
  resources: {
    en: {translation: enTranslation},
    ar : {translation: arTranslation},
  },
  fallbackLng: 'en',
  detection: {
    order: ["path" ,'cookie' ,"htmlTag"], 
    caches : ["cookie"],
  },
});

i18n.on('languageChanged', (lng) => {
  const direction = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', direction);
});
export default i18n;
