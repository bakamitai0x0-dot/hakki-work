export type InquiryInput={name:string;email:string;projectType:string;description:string;budget:string;timeline:string;audience?:string};
export const allowedProjectTypes:string[];
export function validateInquiry(input:InquiryInput):Record<string,string>;
export function deliverInquiry(endpoint:string|null,input:InquiryInput,options?:{signal?:AbortSignal;fetcher?:typeof fetch}):Promise<{status:'invalid'|'unconfigured'|'error'|'success';errors?:Record<string,string>}>;
