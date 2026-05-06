#### JavaScript is single-threaded, so goroutines are simulated with `setTimeout(fn, 0)` to defer work to the next event-loop iteration; output order is deterministic (deferred tasks run after all synchronous code completes).
___
##### Run Command:

`$ deno run goroutines.ts`

##### Results:

`direct : 0`
`direct : 1`
`direct : 2`
`goroutine : 0`
`goroutine : 1`
`goroutine : 2`
`going`
`done`
