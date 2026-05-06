import { createHash } from 'node:crypto';

const s: string = "sha256 this string";
const hash: string = createHash('sha256').update(s).digest('hex');
console.log(s);
console.log(hash);
