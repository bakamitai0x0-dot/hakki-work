'use client';
import Image from 'next/image';import {useState} from 'react';
export function Media({src,alt,priority=false,className='',sizes='(max-width: 600px) 100vw, 50vw'}:{src:string;alt:string;priority?:boolean;className?:string;sizes?:string}){const [failed,setFailed]=useState(false);return <div className={'media '+className}><Image src={failed?'/media/placeholder.svg':src} alt={failed?alt+' — studio placeholder':alt} fill sizes={sizes} priority={priority} onError={()=>setFailed(true)}/></div>}
