#### JavaScript plain objects and the `for...of` loop over `Object.entries()` and `Object.keys()` preserve insertion order, making map iteration deterministic — unlike Go's non-deterministic map range. The final loop iterates over the string `'go'`, printing the Unicode code point of each character (`g`=103, `o`=111).
___
##### Run Command:

`$ deno run range.ts`

##### Results:

`sum: 6`
`index: 1`
`a -> apple`
`b -> banana`
`key: a`
`key: b`
`0 103`
`1 111`
