'use client';
import Link from 'next/link';
import {useState} from 'react';
import {ArrowUpRight} from 'lucide-react';
import {featuredWorks,workCategories,type WorkCategory} from '@/data/studio';
import {Media} from '@/components/ui/media';
import {Modal} from '@/components/ui/modal';
import {EmptyState} from '@/components/ui/primitives';
export function SelectedWorks(){
 const [category,setCategory]=useState<WorkCategory>('All');
 const [active,setActive]=useState<typeof featuredWorks[number]|null>(null);
 const works=featuredWorks.filter(w=>category==='All'||w.category===category);
 return <><div className="hw-work-filters" role="group" aria-label="Filter selected works">{workCategories.map(c=><button key={c} type="button" aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><p className="hw-caption" role="status">{works.length} internal concepts · No client commissions or commercial outcomes are claimed.</p>{works.length?<div className="hw-work-grid">{works.map(w=><article key={w.id} className="hw-work-card"><button className="hw-work-image" type="button" onClick={()=>setActive(w)} aria-label={'View project: '+w.name}><Media src={w.image} alt={w.name+' — internal concept visual'}/></button><h3>{w.name}</h3><div className="hw-work-meta"><span>{w.category}</span><span>Concept</span></div><p>{w.description}</p><button className="text-link" type="button" onClick={()=>setActive(w)}>View Project<ArrowUpRight size={17}/></button></article>)}</div>:<EmptyState title="More ideas are taking shape." description="There are no projects in this category yet."/>}{active&&<Modal title={active.name} onClose={()=>setActive(null)}><div className="hw-work-detail"><Media src={active.image} alt={active.name+' concept study'}/><p className="hw-caption">Concept · {active.category}</p><p>{active.detail}</p><Link className="text-link" href={active.href} onClick={()=>setActive(null)}>{active.linkLabel}<ArrowUpRight size={17}/></Link></div></Modal>}</>;
}
