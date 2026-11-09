'use client';

import {useEffect} from 'react';
import {Globe} from 'lucide-react';
import {locale, locales, localizedPath, type Locale} from '@/locales';

const names = {en: 'English', 'zh-CN': '简体中文', ms: 'Bahasa Melayu'};
const short = {en: 'EN', 'zh-CN': '中文', ms: 'BM'};
const labels = {en: 'Language', 'zh-CN': '语言', ms: 'Bahasa'};

export function LanguageSwitcher({mobile = false}: {mobile?: boolean}) {
  useEffect(() => {
    try { localStorage.setItem('hakki.locale', locale); } catch {}
  }, []);
  function change(language: Locale) {
    if (language === locale) return;
    const {pathname, search, hash} = window.location;
    const path = pathname.replace(/^\/(?:zh-CN|ms|en)(?=\/|$)/, '') || '/';
    window.location.assign(localizedPath(path, language) + search + hash);
  }
  return <label className={mobile ? 'language-switcher language-switcher-mobile' : 'language-switcher'}>
    <Globe size={16} aria-hidden="true"/>
    <span className="sr-only">{labels[locale]}</span>
    <select value={locale} onChange={event => change(event.currentTarget.value as Locale)}>
      {locales.map(language => <option value={language} key={language} lang={language}>{mobile ? names[language] : short[language]}</option>)}
    </select>
  </label>;
}
