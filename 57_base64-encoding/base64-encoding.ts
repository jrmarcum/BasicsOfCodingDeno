import { Buffer } from "node:buffer";

const data: string = "abc123!?$*&()'-=@~";

const sEnc: string = Buffer.from(data).toString("base64");
console.log(sEnc);
const sDec: string = Buffer.from(sEnc, "base64").toString();
console.log(sDec);
console.log();

const uEnc: string = Buffer.from(data).toString("base64url");
console.log(uEnc);
const uDec: string = Buffer.from(uEnc, "base64url").toString();
console.log(uDec);
