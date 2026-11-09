import {t, languageMetadata, locale} from '@/locales';
import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowDown, ArrowRight, Plus} from 'lucide-react';
import {Reveal} from '@/components/ui/reveal';
import {SectionHeading} from '@/components/ui/primitives';
import {inquiryHref} from '@/data/studio';
import {benefits, earnings, faq, rights, showcase, steps} from './content';
import './creators.css';

const title = t('Creator Program') + ' | ' + t('Turn Your Creation Into Something More.');
const description = t('Discover the HAKKI Creator Program. Turn an eligible custom-made product into a marketplace listing and earn agreed royalties while HAKKI WORK handles future production and fulfillment.');
const alternates = languageMetadata('/creators/');
const url = alternates.canonical;

export const metadata: Metadata = {
  title: {absolute: title},
  description,
  alternates,
  openGraph: {title, description, url, siteName: 'HAKKI WORK', locale: {en:'en_MY','zh-CN':'zh_CN',ms:'ms_MY'}[locale], type: 'website', images: [
    {url: 'https://hakki.work/media/studio-concepts/hero.jpg', alt: 'HAKKI WORK studio concept figurines'},
  ]},
};

const showcaseImages = ['sketch', 'model', 'figure', 'listing'];

const example = [
  [t("Retail Price"), 'RM100'],
  [t("Production & Eligible Order Costs"), 'RM55'],
  [t("Distributable Amount"), 'RM45'],
  [t("Illustrative Creator Share"), '30%'],
  [t("Illustrative Royalty"), 'RM13.50'],
];

function ProjectLink() {
  return <Link href={inquiryHref()} className="button">{t("Start a Custom Project")} <ArrowRight size={18} aria-hidden="true"/></Link>;
}

export default function CreatorsPage() {
  return <div className="creator-page">
    <section className="container creator-hero" aria-labelledby="creator-title">
      <div className="creator-hero-copy">
        <h1 id="creator-title">{t("Turn Your Creation Into Something More.")}</h1>
        <p>{t("With the HAKKI Creator Program, you can apply after your custom product ships to share it with more people and earn royalties from eligible sales.")}</p>
        <div className="creator-actions">
          <a className="button" href="#how-it-works">{t("Explore How It Works")} <ArrowDown size={18} aria-hidden="true"/></a>
          <Link href={inquiryHref()} className="creator-secondary">{t("Start a Custom Project")} <ArrowRight size={18} aria-hidden="true"/></Link>
        </div>
        <ul className="creator-highlights">
          <li>{t("No Additional Listing Fee")}</li><li>{t("Royalties from Eligible Sales")}</li><li>{t("Produced & Fulfilled by HAKKI WORK")}</li>
        </ul>
      </div>
      <figure className="creator-hero-art">
        <Image src="/media/studio-concepts/hero.jpg" width={1536} height={1024} alt="Studio concept figurines in a warm-toned product composition" preload unoptimized/>
        <figcaption>{t("HAKKI studio concept visual")}</figcaption>
      </figure>
    </section>

    <section className="container creator-section" aria-label="Why join">
      <SectionHeading title={t("One Creation. More Possibilities.")}/>
      <Reveal><ul className="creator-benefits">
        {benefits.map(([name, detail]) => <li key={name}><h3>{name}</h3><p>{detail}</p></li>)}
      </ul></Reveal>
    </section>

    <section className="creator-band creator-section" id="how-it-works" aria-label="How it works">
      <div className="container">
        <SectionHeading title={t("From Your Custom Order to a Creator Product.")}/>
        <Reveal><ol className="creator-steps">
          {steps.map(([name, detail], index) => <li key={name}>
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{name}</h3><p>{detail}</p></div>
          </li>)}
        </ol></Reveal>
      </div>
    </section>

    <section className="container creator-section" aria-label="Creation showcase">
      <SectionHeading title={t("Created Once. Shared With More.")} description={t("Concept Demonstration · Studio artwork illustrating the stages of a potential listing.")}/>
      <Reveal>
        <ol className="creator-showcase">
          {showcase.map(([name, detail], index) => <li key={name}>
            <div className={'creator-study creator-study-' + index}>
              <Image src={'/media/studio-concepts/' + showcaseImages[index] + '.jpg'} alt="" width={280} height={240} loading="lazy" unoptimized/>
              {index === 3 && <span>{t("Listing preview")}</span>}
            </div>
            <h3>{name}</h3><p>{detail}</p>
          </li>)}
        </ol>
      </Reveal>
    </section>

    <section className="creator-band creator-section" aria-label="Royalties and earnings">
      <div className="container creator-split">
        <div>
          <SectionHeading title={t("Every Eligible Sale Can Reward Your Creativity.")}/>
          <ol className="creator-earnings">{earnings.map(step => <li key={step}>{step}</li>)}</ol>
        </div>
        <div className="creator-example">
          <h3>{t("Illustrative royalty calculation")}</h3>
          <dl>{example.map(([label, amount]) => <div key={label}><dt>{label}</dt><dd>{amount}</dd></div>)}</dl>
          <p><em>{t("Illustrative example only. Actual royalty rates and calculation terms are confirmed before listing.")}</em></p>
        </div>
      </div>
    </section>

    <section className="container creator-section creator-split" aria-label="Creator rights and participation">
      <SectionHeading title={t("Your Creation. Your Decision.")}/>
      <div>
        <ul className="creator-rights">{rights.map(rule => <li key={rule}>{rule}</li>)}</ul>
        <p className="creator-rights-note"><strong>{t("Commercial rights depend on the agreement.")}</strong> {' '}{t('Paying for custom development does not automatically transfer intellectual property or resale rights. Eligibility depends on the original contract, ownership and any subsequent authorization.')}</p>
      </div>
    </section>

    <section className="container creator-section creator-split" aria-label="Frequently asked questions">
      <SectionHeading title={t("Frequently Asked Questions")}/>
      <div className="creator-faq">
        {faq.map(([question, answer]) => <details name="creator-faq" key={question}>
          <summary>{question}<Plus size={18} aria-hidden="true"/></summary><p>{answer}</p>
        </details>)}
      </div>
    </section>

    <section className="creator-band creator-section" id="join" aria-label="Join the program">
      <div className="container">
        <SectionHeading title={t("Ready to Share Your Creation?")}/>
        <div className="creator-join">
          <div id="application-status">
            <h3>{t("Already Have a Completed Custom Order?")}</h3>
            <p>{t("Online applications are currently unavailable. When they open, you’ll need to sign in and select your own eligible paid and shipped custom order. Applications are reviewed before any product can go on sale.")}</p>
            <button className="button" type="button" disabled>{t("Apply to List Your Creation")}</button>
          </div>
          <div><h3>{t("Have a New Idea?")}</h3><p>{t("Share your brief with HAKKI WORK to start a custom project.")}</p><ProjectLink/></div>
        </div>
      </div>
    </section>
  </div>;
}
