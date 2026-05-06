import { inspect } from "node:util";
import { Buffer } from "node:buffer";

interface Point {
    x: number;
    y: number;
}

const p: Point = { x: 1, y: 2 };

console.log(`{${p.x} ${p.y}}`);
console.log(`{x:${p.x} y:${p.y}}`);
console.log(inspect(p));
console.log(typeof p);

console.log(true);
console.log(123);
console.log((14).toString(2));
console.log(String.fromCharCode(33));
console.log((456).toString(16));
console.log((78.9).toFixed(6));

function toExp(n: number, digits: number): string {
    return n.toExponential(digits).replace(/e([+-])(\d)$/, "e$10$2");
}
console.log(toExp(123400000.0, 6));
console.log(toExp(123400000.0, 6).toUpperCase());

console.log('"string"');
console.log(JSON.stringify('"string"'));
console.log(Buffer.from("hex this").toString("hex"));

console.log(`|${"12".padStart(6)}|${"345".padStart(6)}|`);
console.log(`|${(1.2).toFixed(2).padStart(6)}|${(3.45).toFixed(2).padStart(6)}|`);
console.log(`|${(1.2).toFixed(2).padEnd(6)}|${(3.45).toFixed(2).padEnd(6)}|`);
console.log(`|${"foo".padStart(6)}|${"b".padStart(6)}|`);
console.log(`|${"foo".padEnd(6)}|${"b".padEnd(6)}|`);

const s: string = `a ${"string"}`;
console.log(s);

Deno.stderr.writeSync(new TextEncoder().encode(`an ${"error"}\n`));
