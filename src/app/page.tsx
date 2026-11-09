import type {Metadata} from 'next';
import {StudioHome} from '@/components/home/studio/studio-home';
import './studio.css';
import {t, languageMetadata} from '@/locales';
const title=t('HAKKI WORK — Creative Design, Web Development & Custom Creations');
const description=t('HAKKI WORK is an independent creative studio specializing in websites, apps, original characters, 3D modeling, custom figurines and personalized products.');
export const metadata:Metadata={title:{absolute:title},description,alternates:languageMetadata('/'),openGraph:{title,description,siteName:'HAKKI WORK',type:'website',url:languageMetadata('/').canonical,images:[{url:'/media/campaign.webp',width:1536,height:1024,alt:'Original studio character concept visual'}]},twitter:{card:'summary_large_image',title,description,images:['/media/campaign.webp']}};
export default function Home(){return <StudioHome/>}
