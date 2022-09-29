import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt_BR from './locale/pt_BR.json';
import en_US from './locale/en_US.json';

const resources = {
  en_US: {translation: en_US},
  pt_BR: {translation: pt_BR},
  pt_PT: {translation: en_US},
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en_US",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;