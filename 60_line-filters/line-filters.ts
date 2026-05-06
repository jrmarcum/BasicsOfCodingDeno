import { createInterface } from "node:readline";

const rl = createInterface({
    input: process.stdin,
    terminal: false,
});

rl.on("line", (line: string): void => {
    console.log(line.toUpperCase());
});

rl.on("error", (err: Error): void => {
    Deno.stderr.writeSync(new TextEncoder().encode(`error: ${err.message}\n`));
    Deno.exit(1);
});
