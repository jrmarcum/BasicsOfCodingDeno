#### JavaScript typically uses `throw`/`try/catch` for error handling. This lesson demonstrates the Go idiom of returning errors as values by returning `{ val, err }` objects and using destructuring. Custom error types extend the built-in `Error` class. Type checking uses `instanceof` in place of Go's type assertion `e.(*argError)`.
___
##### Run Command:

`$ deno run errors.ts`

##### Results:

`f1 worked: 10`
`f1 failed: can't work with 42`
`f2 worked: 10`
`f2 failed: 42 - can't work with 42`
`42`
`can't work with 42`
