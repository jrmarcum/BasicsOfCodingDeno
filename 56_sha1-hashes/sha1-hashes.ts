import * as crypto from "node:crypto";

const s: string = "sha1 this string";

const h = crypto.createHash("sha1");
h.update(s);
const bs: string = h.digest("hex");

console.log(s);
console.log(bs);
