#### Go's goroutine worker pool with channels maps to async worker functions sharing a job-index closure; workers run concurrently via `Promise.all` and pull jobs until none remain.
___
##### Run Command:

`$ deno run worker-pools.ts`

##### Results:

`worker 1 started  job 1`
`worker 2 started  job 2`
`worker 3 started  job 3`
`worker 1 finished job 1`
`worker 1 started  job 4`
`worker 2 finished job 2`
`worker 2 started  job 5`
`worker 3 finished job 3`
`worker 1 finished job 4`
`worker 2 finished job 5`
