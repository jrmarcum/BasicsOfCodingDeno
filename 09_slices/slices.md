#### JavaScript arrays are dynamic by default — there is no separate "slice" type as in Go. The spread operator (`...`) is used for copying, and `Array.prototype.slice()` provides sub-array views (returning new arrays, not memory-sharing slices as in Go).
___
##### Run Command:

`$ deno run slices.ts`

##### Results:

`emp: [ '', '', '' ]`
`set: [ 'a', 'b', 'c' ]`
`get: c`
`len: 3`
`apd: [ 'a', 'b', 'c', 'd', 'e', 'f' ]`
`cpy: [ 'a', 'b', 'c', 'd', 'e', 'f' ]`
`sl1: [ 'c', 'd', 'e' ]`
`sl2: [ 'a', 'b', 'c', 'd', 'e' ]`
`sl3: [ 'c', 'd', 'e', 'f' ]`
`dcl: [ 'g', 'h', 'i' ]`
`2d: [ [ 0 ], [ 1, 2 ], [ 2, 3, 4 ] ]`
