import * as fs from "node:fs";
import * as path from "node:path";
import { Buffer } from "node:buffer";

fs.mkdirSync("tmp", { recursive: true });

fs.writeFileSync(path.join("tmp", "dat1"), "hello\ngo\n");
fs.writeFileSync(path.join("tmp", "dat"), "hello\ngo\n");

const fd: number = fs.openSync(path.join("tmp", "dat2"), "w");

const d2: Buffer = Buffer.from([115, 111, 109, 101, 10]);
const n2: number = fs.writeSync(fd, d2);
console.log(`wrote ${n2} bytes`);

const n3: number = fs.writeSync(fd, "writes\n");
console.log(`wrote ${n3} bytes`);

fs.fsyncSync(fd);

const n4: number = fs.writeSync(fd, "buffered\n");
console.log(`wrote ${n4} bytes`);

fs.closeSync(fd);
