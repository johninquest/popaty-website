import { de } from './locales/de';
import { en } from './locales/en';

export const languages = {
  de: 'Deutsch',
  en: 'English',
};

export const defaultLang = 'de'; // Set German as default since Sozialcare is German-focused

export const ui = {
    de,
    en,
} as const;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}