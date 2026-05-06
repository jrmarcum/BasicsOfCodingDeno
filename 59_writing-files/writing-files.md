#### Deno supports the `node:fs` module for file I/O. `writeFileSync` is the equivalent of Go's `os.WriteFile`; `openSync`/`writeSync` mirror `os.Create`/`f.Write`; `fsyncSync` mirrors `f.Sync()`. This program creates a `tmp/` directory and writes `tmp/dat`, `tmp/dat1`, and `tmp/dat2` — these paths are excluded by `.gitignore`.
___
##### Run Command:

`$ deno run --allow-read --allow-write writing-files.ts`

##### Results:

`wrote 5 bytes`
`wrote 7 bytes`
`wrote 9 bytes`
