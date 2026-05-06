#### Go's `rune` type maps to JavaScript's Unicode code point; `Buffer.from(s).length` gives the byte length, `[...s]` spreads into code-point characters, and `for...of` iterates each rune with `codePointAt(0)` for the numeric value.
___
##### Run Command:

`$ deno run strings-and-runes.ts`

##### Results:

`Len: 18`
`e0 b8 aa e0 b8 a7 e0 b8 b1 e0 b8 aa e0 b8 94 e0 b8 b5 `
`Rune count: 6`
`U+0E2A 'ส' starts at 0`
`U+0E27 'ว' starts at 3`
`U+0E31 'ั' starts at 6`
`U+0E2A 'ส' starts at 9`
`U+0E14 'ด' starts at 12`
`U+0E35 'ี' starts at 15`
``
`Using explicit decoding`
`U+0E2A 'ส' starts at 0`
`found so sua`
`U+0E27 'ว' starts at 3`
`U+0E31 'ั' starts at 6`
`U+0E2A 'ส' starts at 9`
`found so sua`
`U+0E14 'ด' starts at 12`
`U+0E35 'ี' starts at 15`
