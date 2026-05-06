#### On Windows, `path.join` from `node:path` uses backslashes (`\`) as the separator, matching the OS convention. On Linux/macOS, forward slashes (`/`) are used — matching Go's output. Additionally, `path.isAbsolute("/dir/file")` returns `false` on Windows (an absolute path requires a drive letter such as `C:\dir\file`), while it returns `true` on Linux/macOS and in Go.
___
##### Run Command:

`$ deno run file-paths.ts`

##### Results:

`p: dir1\dir2\filename`
`dir1\filename`
`dir1\filename`
`Dir(p): dir1\dir2`
`Base(p): filename`
`false`
`false`
`.json`
`config`
`t\file`
`..\c\t\file`
