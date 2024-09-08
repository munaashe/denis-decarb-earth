import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";


i18next
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',

    supportedLngs: ["en", "de"],

    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ["path", "cookie"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18next;