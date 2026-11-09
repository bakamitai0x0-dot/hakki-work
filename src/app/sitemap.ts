import type {MetadataRoute} from 'next';
import {products, characters, collections, journals} from '@/data/catalog';
import {languageMetadata} from '@/locales';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/', '/shop/', '/collections/', '/characters/', '/new-releases/', '/journal/', '/about/', '/support/', '/creators/',
    ...products.map(item => '/products/' + item.slug + '/'),
    ...collections.map(item => '/collections/' + item.slug + '/'),
    ...characters.map(item => '/characters/' + item.slug + '/'),
    ...journals.map(item => '/journal/' + item.slug + '/'),
  ];
  return paths.flatMap(path => {
    const {languages} = languageMetadata(path);
    return [languages.en, languages['zh-CN'], languages.ms].map(url => ({
      url,
      alternates: {languages},
      changeFrequency: 'weekly',
      priority: path === '/' ? 1 : .7,
    }));
  });
}
