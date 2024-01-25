import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import sv from './locales/sv.json'


function loadLocaleMessages () {
    const locales  = {en: en, sv: sv};
    const messages = {};

    for (const key in locales) {
        messages[key] = locales[key];
    }
    return messages;
}



export default createI18n({
  locale: 'sv',
  fallbackLocale: 'sv',
  messages: loadLocaleMessages()
});
