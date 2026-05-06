# Basics of Coding Deno — Project Context

## Purpose

Multi-language comparative study of programming syntax, language simplicity,
lines of code required, and runtime performance. Deno is one of several
languages implemented against the same set of example programs, enabling
direct side-by-side comparison.

## Licensing Summary

This project contains two tiers of content with different licenses:

- **CC BY 3.0** — lesson files and code examples adapted from
  "Basics of Coding Go" by Jon Marcum, which was itself adapted from
  "Go by Example" by Mark McGranaghan
  (https://github.com/mmcgrana/gobyexample).
  License: http://creativecommons.org/licenses/by/3.0/

- **CC0 1.0** — original contributions by Jon Marcum (project structure,
  README, comparative-study additions, and any lessons not derived from
  Go by Example). See LICENSE.

Attribution for derived content is provided centrally in README.md and
NOTICE — do **not** add a per-file attribution footer to lesson `.md` files.

## Upstream Reference

BasicsOfCodingGo is included as a git submodule at `upstream/basicsofcodinggo`.
Read each lesson from `upstream/basicsofcodinggo/##_topic-name/` as the
source of truth for program logic and expected output.

## Project Structure

```
BasicsOfCodingDeno/
├── CLAUDE.md          — this file; canonical project context for Claude sessions
├── LICENSE            — CC0 (applies to Jon Marcum's original contributions)
├── NOTICE             — attribution notice for CC BY 3.0 derived content
├── README.md          — project overview, attribution section, license table
├── upstream/
│   └── basicsofcodinggo/  — git submodule: BasicsOfCodingGo reference
└── ##_topic-name/
    ├── topic-name.ts  — TypeScript source (run with deno run)
    └── topic-name.md  — lesson explanation (run commands + expected output)
```

Lessons are numbered with a two-digit prefix (e.g., `01_hello-world`),
mirroring BasicsOfCodingGo exactly: same lesson numbers, same folder names.

## .gitignore

The project `.gitignore` covers:

```gitignore
# Temporary files created by lesson examples (lessons 58-60)
tmp/

# Deno cache
.deno/

# Environment files
.env
.env.local

# OS artifacts
.DS_Store
Thumbs.db
```

- `tmp/` is the working directory expected by lessons 58 (reading-files),
  59 (writing-files), and 60 (line-filters). It must exist at runtime but
  should not be committed. Lesson 59 creates it automatically.
- No `node_modules/`, `package.json`, or `tsconfig.json` — Deno handles
  TypeScript natively with no config files. npm: imports are fetched
  automatically on first run and cached in Deno's global cache.

## Language Notes for Future Claude Sessions

- **Runtime:** Deno only. No Node.js, no browser APIs.
  - TypeScript: `deno run [flags] filename.ts`
  - No `.js` files in this project — Deno is TypeScript-first.
- **Module system:** ES modules (`import`/`export`) throughout.
  - Node.js built-ins use the `node:` prefix: `import * as fs from "node:fs"`
  - npm packages use the `npm:` prefix: `import xml2js from "npm:xml2js"`
  - Deno 2.x supports both prefixes natively; no import maps needed.
- **No package.json or tsconfig.json** — Deno runs TypeScript directly.
- **TypeScript conventions used:**
  - Function parameter and return types always explicit
  - `interface` for object shapes (structs, result objects)
  - Tuple return types `[T, U]` for multiple-return-value lessons
  - `Array<() => void>` for typed function arrays (lesson 43)
  - `unknown` for truly-unknown-type parameters (lesson 07 `whatAmI`)
  - `implements InterfaceName` on classes (lesson 20)
  - `import xml2js from "npm:xml2js"` for the xml2js package (lesson 49)
- **Permission flags** — add only what the lesson actually needs:
  - `--allow-read`  — lessons 58, 59, 60, 62, 63
  - `--allow-write` — lessons 59, 60, 62, 63
  - `--allow-env`   — lesson 67; also lesson 74 (`Deno.env.toObject()`)
  - `--allow-net`   — lessons 49 (npm: fetch), 69, 70, 72
  - `--allow-run`   — lessons 74, 75 (child_process)
  - Combine when both needed: `deno run --allow-read --allow-write writing-files.ts`
- **Deno vs Node.js API differences:**
  - `process.argv` (2-element offset) → `Deno.args` (no offset; `Deno.args[0]`
    is the first user argument)
  - `process.env.FOO` → `Deno.env.get("FOO") ?? ""`
  - `process.env.FOO = "1"` → `Deno.env.set("FOO", "1")`
  - `Object.keys(process.env)` → `Object.keys(Deno.env.toObject())`
  - `process.stdout.write(s)` → `Deno.stdout.writeSync(new TextEncoder().encode(s))`
  - `process.stderr.write(s)` → `Deno.stderr.writeSync(new TextEncoder().encode(s))`
  - `process.exit(n)` → `Deno.exit(n)`
  - `process.execPath` → `Deno.execPath()` (lessons 74, 75)
  - `process.platform === 'win32'` → `Deno.build.os === 'windows'` (lesson 75)
  - `os.tmpdir()` → `import { tmpdir } from "node:os"` (unchanged)
  - `Buffer` → `import { Buffer } from "node:buffer"`
  - `require("crypto")` → `import * as crypto from "node:crypto"`
  - `require("readline")` → `import { createInterface } from "node:readline"`
    (node:readline works unchanged under Deno — lesson 60)
  - `process.on/emit` for signals/exit events → `import process from "node:process"`
    (lessons 76, 77 — keeps cross-platform signal compat via Deno's Node.js layer)
- **No external packages** except lesson 49 (xml: `npm:xml2js`) and lesson 68
  (testing: `jsr:@std/assert`); both fetched automatically on first run.
- **JavaScript has no pointers** (lesson 17) — implement with object references;
  note the difference from Go's pointer semantics.
- **JavaScript has no defer** (lesson 43) — simulated with a `deferred` array
  and LIFO execution; note that `try/finally` is the real-world idiom.
- **JavaScript has no panic/recover** (lesson 42) — implement with `throw`/`try/catch`.
- **JavaScript has no explicit interfaces** (lesson 20) — implement with duck typing.
- **JavaScript has no structs** (lesson 18) — implement with classes or plain objects.
- **Go's `fmt.Println` vs `console.log`:** Go uses space-separated `%v` format for
  structs/arrays (e.g., `[1 2 3]`, `map[k:v]`). Deno uses its own inspection
  format (e.g., `[ 1, 2, 3 ]`, `{ k: 'v' }`). Always show actual Deno output
  in the `.md` file.
- **Map iteration order:** Go maps are non-deterministic. JavaScript plain objects
  and `Map` preserve insertion order. No variability note needed for JS maps.
- **Variable output lessons** (description at top notes this): 07 (switch — time),
  32 (tickers — timestamps), 37 (rate-limiting — timestamps), 39 (logging — timestamps),
  42 (panic — stack trace), 50 (time), 51 (epoch), 52 (time-formatting-parsing),
  53 (random-numbers), 63 (temporary-files-and-directories), 67 (environment-variables),
  68 (testing-and-benchmarking — timing values), 70 (http-server — user-agent header),
  74 (execing-processes — deno version), 75 (spawning-processes — deno version).
- **Lessons with setup steps:** 49 (xml — first run fetches npm:xml2js),
  58 (reading-files — run 59 first), 60 (line-filters — requires stdin piping),
  68 (testing — first run fetches jsr:@std/assert).
- **Lesson 64 (command-line-arguments):** `Deno.args` has no argv[0]/argv[1]
  prefix. `argsWithProg` and `argsWithoutProg` are both `Deno.args`; the third
  argument is `Deno.args[2]` (was `process.argv[4]` in Node.js).
- The root `LICENSE` file is CC0 but does **not** cover the derived content.
  Always refer to NOTICE and README for the full picture.

## .md File Format

Each lesson `.md` follows the Go/V reference format:

```
#### Optional description (language note or setup instruction).
___
##### Run Command:

`$ deno run [flags] filename.ts`

##### Results:

`output line 1`
`output line 2`
```

Rules:
- The description line (if present) is a single `####` sentence before the first `___`.
- No opening `___` before a description; `___` separates description from run command.
- If there is no description, the file starts directly with `##### Run Command:`.
- Multiple run command sections are separated by a blank line, `___`, and a blank line.
- No per-file attribution footer — attribution is fully satisfied by README and NOTICE.
