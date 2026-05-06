#### JavaScript does not have fixed-size typed arrays in the way Go does. A standard JavaScript array is always dynamic. Deno displays arrays using comma-separated bracket notation (e.g., `[ 1, 2, 3 ]`) while Go uses space-separated bracket notation (e.g., `[1 2 3]`).
___
##### Run Command:

`$ node arrays.js`

`$ npx ts-node arrays.ts`

##### Results:

`emp: [ 0, 0, 0, 0, 0 ]`
`set: [ 0, 0, 0, 0, 100 ]`
`get: 100`
`len: 5`
`dcl: [ 1, 2, 3, 4, 5 ]`
`2d: [ [ 0, 1, 2 ], [ 1, 2, 3 ] ]`
