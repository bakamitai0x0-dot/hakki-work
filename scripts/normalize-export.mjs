// Work around Next.js Windows static-export segment path bug (vercel/next.js#85374).
// The router requests dotted filenames; Windows export can emit nested directories.
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
export function normalizeExport(root){let copied=0;function scan(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory())scan(full);else if(entry.name.endsWith('.txt')){const parts=path.relative(root,full).split(path.sep);const start=parts.findIndex(p=>p.startsWith('__next.'));if(start>=0&&start<parts.length-1){const target=path.join(root,...parts.slice(0,start),parts.slice(start).join('.'));fs.copyFileSync(full,target);copied++}}}}scan(root);return copied}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){console.log('Normalized static segment files:',normalizeExport(path.resolve('out')))}
