#### The last line (`an error`) is written to stderr, not stdout. JavaScript uses template literals for string interpolation, `padStart`/`padEnd` for width formatting, `toFixed` for float precision, `toString(base)` for base conversions, and `util.inspect` for object representation. Unlike Go's `%T`, `typeof` returns generic type categories (`"object"`, `"number"`) rather than package-qualified type names.
___
##### Run Command:

`$ deno run string-formatting.ts`

##### Results:

`{1 2}`
`{x:1 y:2}`
`{ x: 1, y: 2 }`
`object`
`true`
`123`
`1110`
`!`
`1c8`
`78.900000`
`1.234000e+08`
`1.234000E+08`
`"string"`
`"\"string\""`
`6865782074686973`
`|    12|   345|`
`|  1.20|  3.45|`
`|1.20  |3.45  |`
`|   foo|     b|`
`|foo   |b     |`
`a string`
`an error`
