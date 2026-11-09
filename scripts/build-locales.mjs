import {spawnSync} from 'node:child_process';
import {cpSync, existsSync, mkdirSync} from 'node:fs';
import {normalizeExport} from './normalize-export.mjs';

for (const locale of ['en', 'zh-CN', 'ms']) {
  const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
    stdio: 'inherit',
    env: {...process.env, NEXT_PUBLIC_HAKKI_LOCALE: locale},
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
  const directory = locale === 'en' ? 'out' : '.export-' + locale;
  normalizeExport(directory);
  if (locale !== 'en') {
    mkdirSync('out/' + locale, {recursive: true});
    cpSync(directory, 'out/' + locale, {recursive: true});
  }
}
if (!existsSync('out/ms/creators/index.html') || !existsSync('out/zh-CN/creators/index.html')) {
  throw new Error('Localized static pages were not exported.');
}
