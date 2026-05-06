#### JavaScript plain objects are used here as the key-value map equivalent. Unlike Go maps, JavaScript object keys preserve insertion order. Accessing a missing key returns `undefined`; the program uses a conditional to return `0` to match Go's zero-value behavior.
___
##### Run Command:

`$ deno run maps.ts`

##### Results:

`map: { k1: 7, k2: 13 }`
`v1: 7`
`v3: 0`
`len: 2`
`map: { k1: 7 }`
`prs: false`
`map: { foo: 1, bar: 2 }`
