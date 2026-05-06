#### The stack trace lines and file paths will vary with each run and environment. The program prints `5` to stdout, then throws an unhandled error which Deno reports to stderr before exiting with code 1. JavaScript uses `throw`/`try/catch` as the equivalent of Go's `panic`/`recover`. Go's `recover()` maps to a `try/catch` block in JavaScript.
___
##### Run Command:

`$ deno run panic.ts`

##### Results:

`5`
`/path/to/panic.js:3`
`        throw new Error(\`expected positive, got ${n}\`);`
`              ^`
`Error: expected positive, got -1`
`    at mustPositive (.../panic.js:3:15)`
`    at Object.<anonymous> (.../panic.js:9:1)`
