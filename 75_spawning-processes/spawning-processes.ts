import { spawnSync } from 'node:child_process';

const versionResult = spawnSync(Deno.execPath(), ['--version'], { encoding: 'utf8' });
console.log('> deno --version');
console.log((versionResult.stdout as string).trim());
console.log();

const badResult = spawnSync('nonexistent_cmd_xyz', [], { encoding: 'utf8' });
if (badResult.error) {
    console.log('failed executing:', (badResult.error as Error & { code?: string }).code);
} else if (badResult.status !== 0) {
    console.log('command exit rc =', badResult.status);
}
console.log();

const isWin: boolean = Deno.build.os === 'windows';
const shell: string = isWin ? 'powershell' : 'bash';
const shellFlag: string = isWin ? '-Command' : '-c';
const shellResult = spawnSync(shell, [shellFlag, `${Deno.execPath()} --version`],
    { encoding: 'utf8' });
console.log('> via shell');
console.log((shellResult.stdout as string).trim());
