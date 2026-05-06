#### On Windows, use PowerShell's `"hello`nfilter`n" | deno run --allow-read --allow-write line-filters.ts`. The program reads from stdin line by line using the `node:readline` module and converts each line to uppercase — the equivalent of Go's `bufio.Scanner` reading from `os.Stdin`.
___
##### Run Command:

`$ printf "hello\nfilter\n" | deno run --allow-read --allow-write line-filters.ts`

##### Results:

`HELLO`
`FILTER`
