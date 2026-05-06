#### JavaScript has no built-in `defer` keyword. This lesson simulates Go's defer behavior using a `deferred` array that stores functions and executes them in LIFO (last-in, first-out) order after the main work completes. In real JavaScript code, `try/finally` is the idiomatic pattern for guaranteed cleanup (equivalent to the most common use of `defer` in Go).
___
##### Run Command:

`$ deno run defer.ts`

##### Results:

`counting`
`done`
`4`
`3`
`2`
`1`
`0`
