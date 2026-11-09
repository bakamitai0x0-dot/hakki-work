import type {NextConfig} from 'next';
const locale = process.env.NEXT_PUBLIC_HAKKI_LOCALE;
const localized = locale === 'zh-CN' || locale === 'ms';
const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {unoptimized: true},
  ...(localized ? {basePath: '/' + locale, distDir: '.export-' + locale} : {}),
};
export default config;
