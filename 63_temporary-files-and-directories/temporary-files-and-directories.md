#### Temp file and directory names will vary with each run due to the random hex suffix. On Linux/macOS the paths will be under `/tmp/`. Deno does not have a built-in `os.CreateTemp` equivalent, so this lesson generates random filenames using `crypto.randomBytes` from `node:crypto` combined with `os.tmpdir()` from `node:os`. The files and directories are removed immediately after use via `try/finally`.
___
##### Run Command:

`$ deno run --allow-read --allow-write temporary-files-and-directories.ts`

##### Results:

`Temp file name: C:\Users\user\AppData\Local\Temp\samplea1b2c3d4e5f6`
`Temp dir name: C:\Users\user\AppData\Local\Temp\sampledira1b2c3d4e5f6`
