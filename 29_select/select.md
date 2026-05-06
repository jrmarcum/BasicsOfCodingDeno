#### Go's `select` statement waiting on multiple channels maps to `Promise.all()` with per-promise `.then()` handlers that fire as each resolves in arrival order.
___
##### Run Command:

`$ deno run select.ts`

##### Results:

`received one`
`received two`
