export function filterProducts(items,filters={}) {
const q=(filters.q||'').trim().toLowerCase();
const result=items.filter(p=>(!q||(p.name+' '+p.description+' '+p.tags.join(' ')).toLowerCase().includes(q))&&(!filters.category||p.category===filters.category)&&(!filters.collection||p.collectionId===filters.collection)&&(!filters.status||p.availabilityStatus===filters.status)&&(!filters.min||p.price>=Number(filters.min))&&(!filters.max||p.price<=Number(filters.max)));
return result.sort((a,b)=>filters.sort==='price-asc'?a.price-b.price:filters.sort==='price-desc'?b.price-a.price:new Date(b.releaseDate)-new Date(a.releaseDate));
}
export function sanitizeCart(raw,products){if(!Array.isArray(raw))return [];const merged=new Map();for(const line of raw){if(!line||typeof line!=='object')continue;const p=products.find(p=>p.id===line.productId);const v=p?.variants.find(v=>v.id===line.variantId);if(!p||!v||!['Available','Pre-order'].includes(p.availabilityStatus)||v.inventory<1||!Number.isFinite(line.quantity))continue;const key=p.id+':'+v.id;const old=merged.get(key)?.quantity||0;merged.set(key,{productId:p.id,variantId:v.id,quantity:Math.min(v.inventory,Math.max(1,Math.floor(line.quantity)+old))});}return [...merged.values()];}
export function cartTotal(lines,products){return lines.reduce((sum,line)=>sum+(products.find(p=>p.id===line.productId)?.price||0)*line.quantity,0);}
