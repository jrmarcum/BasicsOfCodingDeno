#### Go's `time.NewTimer` maps to `setTimeout`; stopping a timer before it fires uses `clearTimeout`, which unlike Go's `timer.Stop()` always succeeds silently.
___
##### Run Command:

`$ deno run timers.ts`

##### Results:

`Timer 1 fired`
`Timer 2 stopped`
