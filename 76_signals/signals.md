#### Go's `signal.NotifyContext` maps to `process.on('SIGINT', ...)` and `process.on('SIGTERM', ...)`; this demo uses `process.emit('SIGINT')` to trigger the handler programmatically.
___
##### Run Command:

`$ deno run signals.ts`

##### Results:

`awaiting signal`
``
`signal: interrupt`
`exiting`
