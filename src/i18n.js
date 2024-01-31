import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import sv from './locales/sv.json'

function loadLocaleMessages() {
    const locales = [{ en: en }, { sv: sv }];
    const messages = {};
    locales.forEach((lang) => {
        const key = Object.keys(lang);
        messages[key] = lang[key];
    });
    return messages;
}


export default createI18n({
    locale: "sv",
    fallbackLocale: "sv",
    legacy: false,
    messages: loadLocaleMessages(),
});
