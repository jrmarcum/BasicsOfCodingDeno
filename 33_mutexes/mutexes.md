#### JavaScript is single-threaded so `++` on a counter is inherently safe; this lesson demonstrates the Go mutex pattern using a `Container` class and `Promise.all` to simulate concurrent goroutines.
___
##### Run Command:

`$ deno run mutexes.ts`

##### Results:

`{`
`  a: 20000,`
`  b: 10000,`
`}`
