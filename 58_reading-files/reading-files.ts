import * as fs from "node:fs";
import * as path from "node:path";
import { Buffer } from "node:buffer";

const tmpFile: string = path.join("tmp", "dat");

const dat: Buffer = fs.readFileSync(tmpFile);
Deno.stdout.writeSync(new TextEncoder().encode(dat.toString()));

const fd: number = fs.openSync(tmpFile, "r");

const b1: Buffer = Buffer.alloc(5);
const n1: number = fs.readSync(fd, b1, 0, 5, 0);
console.log(`${n1} bytes: ${b1.slice(0, n1).toString()}`);

const b2: Buffer = Buffer.alloc(2);
const n2: number = fs.readSync(fd, b2, 0, 2, 6);
console.log(`${n2} bytes @ 6: ${b2.slice(0, n2).toString()}`);

const b3: Buffer = Buffer.alloc(2);
const n3: number = fs.readSync(fd, b3, 0, 2, 8);
Deno.stdout.writeSync(new TextEncoder().encode(`${n3} bytes @ 8: ${b3.slice(0, n3).toString()}\n`));

const b4: Buffer = Buffer.alloc(5);
fs.readSync(fd, b4, 0, 5, 0);
console.log(`5 bytes: ${b4.toString()}`);

fs.closeSync(fd);
