import {t} from '@/locales';
import Link from 'next/link';
import {ArrowUpRight, ArrowRight} from 'lucide-react';
export function SectionHeading({title,description,href,label='Explore all'}:{title:string;description?:string;href?:string;label?:string}){return <div className="section-heading"><div><h2>{title}</h2>{description&&<p>{description}</p>}</div>{href&&<Link className="text-link" href={href}>{label}<ArrowUpRight size={17}/></Link>}</div>}
export function Breadcrumbs({items}:{items:{label:string;href?:string}[]}){return <nav aria-label="Breadcrumb" className="breadcrumbs"><Link href="/">{t("Home")}</Link>{items.map((i,n)=><span key={n}> / {i.href?<Link href={i.href}>{i.label}</Link>:<span aria-current="page">{i.label}</span>}</span>)}</nav>}
export function EmptyState({title='Nothing here just yet',description='Try another selection.',href,label='Explore the shop'}:{title?:string;description?:string;href?:string;label?:string}){return <div className="empty-state"><h2>{title}</h2><p>{description}</p>{href&&<Link className="button" href={href}>{label}<ArrowRight size={18}/></Link>}</div>}
export function LoadingSkeleton(){return <div role="status" aria-label="Loading content" className="product-grid">{[0,1,2,3].map(i=><div key={i} className="skeleton"/>)}<span className="sr-only">Loading…</span></div>}
