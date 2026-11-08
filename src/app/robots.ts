import type {MetadataRoute} from 'next';export default function robots():MetadataRoute.Robots{const origin=process.env.NEXT_PUBLIC_SITE_URL||'https://atelier-objects.example';return {rules:{userAgent:'*',allow:'/',disallow:['/cart/','/checkout/','/account/','/not-found/']},sitemap:origin+'/sitemap.xml'}}

export const dynamic = 'force-static';
