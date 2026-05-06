import { execFileSync } from 'node:child_process';

const binary: string = Deno.execPath();
const args: string[] = ['--version'];
const env: Record<string, string> = Deno.env.toObject();

const output: string = execFileSync(binary, args, { encoding: 'utf8', env });
Deno.stdout.writeSync(new TextEncoder().encode(output));
