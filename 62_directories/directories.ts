import * as fs from "node:fs";
import * as path from "node:path";

fs.mkdirSync("subdir", { recursive: true });

function createEmptyFile(name: string): void {
    fs.writeFileSync(name, "");
}

try {
    createEmptyFile("subdir/file1");

    fs.mkdirSync("subdir/parent/child", { recursive: true });
    createEmptyFile("subdir/parent/file2");
    createEmptyFile("subdir/parent/file3");
    createEmptyFile("subdir/parent/child/file4");

    const c = fs.readdirSync("subdir", { withFileTypes: true });
    for (const entry of c) {
        console.log(" ", entry.name, entry.isDirectory());
    }

    const c2 = fs.readdirSync("subdir/parent/child", { withFileTypes: true });
    for (const entry of c2) {
        console.log(" ", entry.name, entry.isDirectory());
    }

    function walkDir(dir: string): void {
        console.log(" ", dir, fs.statSync(dir).isDirectory());
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath: string = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                walkDir(fullPath);
            } else {
                console.log(" ", fullPath, false);
            }
        }
    }
    walkDir("subdir");
} finally {
    fs.rmSync("subdir", { recursive: true, force: true });
}
