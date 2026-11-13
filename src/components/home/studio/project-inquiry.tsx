'use client';
import {t} from '@/locales';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {ArrowRight} from 'lucide-react';
import {projectTypes,studio} from '@/data/studio';
import {validateInquiry,type InquiryInput} from '@/lib/inquiry.mjs';
const blank:InquiryInput={name:'',email:'',projectType:'',description:'',budget:'',timeline:'',audience:'personal'};
export function ProjectInquiry(){
 const [values,setValues]=useState<InquiryInput>(blank);
 const [errors,setErrors]=useState<Record<string,string>>({});
 const formRef=useRef<HTMLFormElement>(null);
 useEffect(()=>{const params=new URLSearchParams(location.search);const type=params.get('projectType')||'';setValues(old=>({...old,projectType:projectTypes.includes(type)?type:'',audience:params.get('audience')==='business'?'business':'personal'}))},[]);
 function update(key:keyof InquiryInput,value:string){setValues(old=>({...old,[key]:value}));setErrors(old=>({...old,[key]:''}));}
 function submit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const issues = validateInquiry(values);
  setErrors(issues);
  const firstError = Object.keys(issues)[0];
  if (firstError) {
   (formRef.current?.elements.namedItem(firstError) as HTMLElement | null)?.focus();
   return;
  }
  const lines = [
   'HAKKI WORK — Project Inquiry',
   'Name: ' + values.name.trim(),
   'Email: ' + values.email.trim(),
   'Project type: ' + values.projectType,
   'Project scope: ' + values.audience,
   'Description: ' + values.description.trim(),
  ];
  if (values.budget.trim()) lines.push('Budget: ' + values.budget.trim());
  if (values.timeline.trim()) lines.push('Timeline: ' + values.timeline.trim());
  window.location.assign(studio.inquiry.whatsapp + '?text=' + encodeURIComponent(lines.join('\n')));
 }
 return <form ref={formRef} className="hw-inquiry-form" onSubmit={submit} noValidate aria-describedby="inquiry-privacy inquiry-availability"><p className="hw-form-context">{values.audience==='business'?t("Business project inquiry"):t("Personal or creative project inquiry")}</p><p id="inquiry-availability" className="hw-form-notice">{t("Review your prepared inquiry in WhatsApp, then tap Send.")}</p><div className="hw-form-grid"><label htmlFor="inquiry-name">{t("Customer Name")} <span>{t("(Required)")}</span><input id="inquiry-name" name="name" autoComplete="name" required maxLength={80} value={values.name} onChange={e=>update('name',e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name?'error-name':undefined}/>{errors.name&&<small id="error-name" className="hw-field-error">{t(errors.name)}</small>}</label><label htmlFor="inquiry-email">{t("Email")} <span>{t("(Required)")}</span><input id="inquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={e=>update('email',e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email?'error-email':undefined}/>{errors.email&&<small id="error-email" className="hw-field-error">{t(errors.email)}</small>}</label><label className="hw-wide" htmlFor="inquiry-type">{t("Project Type")} <span>{t("(Required)")}</span><select id="inquiry-type" name="projectType" required value={values.projectType} onChange={e=>update('projectType',e.target.value)} aria-invalid={!!errors.projectType} aria-describedby={errors.projectType?'error-type':undefined}><option value="">{t("Select a project type")}</option>{projectTypes.map(type=><option key={type} value={type}>{t(type)}</option>)}</select>{errors.projectType&&<small id="error-type" className="hw-field-error">{t(errors.projectType)}</small>}</label><label className="hw-wide" htmlFor="inquiry-description">{t("Project Description")} <span>{t("(Required)")}</span><textarea id="inquiry-description" name="description" required minLength={30} maxLength={5000} rows={5} placeholder={t("Tell us about the idea, what you need, and how it will be used. At least 30 characters.")} value={values.description} onChange={e=>update('description',e.target.value)} aria-invalid={!!errors.description} aria-describedby={errors.description?'error-description':undefined}/>{errors.description&&<small id="error-description" className="hw-field-error">{t(errors.description)}</small>}</label><label htmlFor="inquiry-budget">{t("Estimated Budget")} <span>{t("(Optional)")}</span><input id="inquiry-budget" name="budget" maxLength={120} placeholder={t("Your budget range and currency")} value={values.budget} onChange={e=>update('budget',e.target.value)} aria-invalid={!!errors.budget}/></label><label htmlFor="inquiry-timeline">{t("Preferred Timeline")} <span>{t("(Optional)")}</span><input id="inquiry-timeline" name="timeline" maxLength={120} placeholder={t("A target date or flexible timeline")} value={values.timeline} onChange={e=>update('timeline',e.target.value)} aria-invalid={!!errors.timeline}/></label></div><p id="inquiry-privacy" className="hw-caption">{t("Continuing opens WhatsApp with the details you entered.")} <Link href="/support#privacy">{t("Read the privacy policy.")}</Link></p>
 <button className="button" type="submit">{t("Continue in WhatsApp")}<ArrowRight size={18}/></button>
 </form>;
}
