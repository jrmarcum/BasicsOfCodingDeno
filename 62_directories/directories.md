#### On Linux/macOS, path separators will be `/` instead of `\`. The program creates a `subdir` directory structure, lists its contents, then removes it using `try/finally` to ensure cleanup — mirroring Go's `defer os.RemoveAll("subdir")`. The `fs.readdirSync` call with `withFileTypes: true` returns `Dirent` objects, equivalent to Go's `os.ReadDir` returning `DirEntry` values.
___
##### Run Command:

`$ deno run --allow-read --allow-write directories.ts`

##### Results:

`  file1 false`
`  parent true`
`  file4 false`
`  subdir true`
`  subdir\file1 false`
`  subdir\parent true`
`  subdir\parent\child true`
`  subdir\parent\child\file4 false`
`  subdir\parent\file2 false`
`  subdir\parent\file3 false`
