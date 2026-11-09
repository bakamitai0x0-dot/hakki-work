import {messages} from './messages';

export const locales = ['en', 'zh-CN', 'ms'] as const;
export type Locale = typeof locales[number];
export const locale: Locale = process.env.NEXT_PUBLIC_HAKKI_LOCALE === 'zh-CN' ? 'zh-CN' :
  process.env.NEXT_PUBLIC_HAKKI_LOCALE === 'ms' ? 'ms' : 'en';

export function t(message: string): string {
  return locale === 'en' ? message : messages[message]?.[locale === 'zh-CN' ? 0 : 1] ?? message;
}

export function localizedPath(path: string, language: Locale = locale): string {
  return (language === 'en' ? '' : '/' + language) + path;
}

const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hakki.work').replace(/\/$/, '');

export function languageMetadata(path: string) {
  const canonical = origin + localizedPath(path);
  return {canonical, languages: {
    en: origin + path,
    'zh-CN': origin + localizedPath(path, 'zh-CN'),
    ms: origin + localizedPath(path, 'ms'),
    'x-default': origin + path,
  }};
}
