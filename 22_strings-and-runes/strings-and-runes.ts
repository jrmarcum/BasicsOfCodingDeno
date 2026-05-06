import { Buffer } from "node:buffer";

const s: string = "สวัสดี";

const buf: Buffer = Buffer.from(s);
console.log("Len:", buf.length);

for (let i = 0; i < buf.length; i++) {
    Deno.stdout.writeSync(new TextEncoder().encode(buf[i].toString(16) + ' '));
}
Deno.stdout.writeSync(new TextEncoder().encode('\n'));

const runes: string[] = [...s];
console.log("Rune count:", runes.length);

let bytePos: number = 0;
for (const char of s) {
    const cp: number = char.codePointAt(0)!;
    const hex: string = cp.toString(16).toUpperCase().padStart(4, '0');
    console.log(`U+${hex} '${char}' starts at ${bytePos}`);
    bytePos += Buffer.from(char).length;
}

console.log();
console.log("Using explicit decoding");

bytePos = 0;
for (const char of s) {
    const cp: number = char.codePointAt(0)!;
    const hex: string = cp.toString(16).toUpperCase().padStart(4, '0');
    console.log(`U+${hex} '${char}' starts at ${bytePos}`);
    examineRune(char);
    bytePos += Buffer.from(char).length;
}

function examineRune(char: string): void {
    if (char === 't') {
        console.log("found tee");
    } else if (char === 'ส') {
        console.log("found so sua");
    }
}
