export const money=(value:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(value);
export const releaseDate=(value:string)=>new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Singapore'}).format(new Date(value));
export const releaseTime=(value:string)=>new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Singapore'}).format(new Date(value))+' SGT';
