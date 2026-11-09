'use client';
import {t} from '@/locales';
import Link from 'next/link';export function ErrorState({reset}:{reset:()=>void}){return <div className="empty-state container page"><h1>A small interruption.</h1><p>We couldn’t load this part of the atelier. Please try again.</p><button className="button" onClick={reset}>{t("Try again")}</button><Link className="text-link" href="/">{t("Return home")}</Link></div>}export default ErrorState;
