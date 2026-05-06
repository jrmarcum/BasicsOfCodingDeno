#### Go's `sync.WaitGroup` maps to `Promise.all()`; worker async functions are started in a loop and awaited together, producing the same start-then-done pattern.
___
##### Run Command:

`$ deno run waitgroups.ts`

##### Results:

`Worker 1 starting`
`Worker 2 starting`
`Worker 3 starting`
`Worker 4 starting`
`Worker 5 starting`
`Worker 1 done`
`Worker 2 done`
`Worker 3 done`
`Worker 4 done`
`Worker 5 done`
