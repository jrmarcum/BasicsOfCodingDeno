#### JavaScript does not natively support multiple return values. This lesson returns an array and uses destructuring assignment (`const [a, b] = vals()`) as the equivalent. Skipping a value uses an empty slot in the destructuring pattern (`const [, c] = vals()`), mirroring Go's blank identifier `_`.
___
##### Run Command:

`$ deno run multiple-return-values.ts`

##### Results:

`3`
`7`
`7`
