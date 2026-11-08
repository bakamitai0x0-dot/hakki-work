import type { Product, CartLine } from '@/types';
export function filterProducts(items:Product[],filters?:Record<string,string>):Product[];
export function sanitizeCart(raw:unknown,products:Product[]):CartLine[];
export function cartTotal(lines:CartLine[],products:Product[]):number;
