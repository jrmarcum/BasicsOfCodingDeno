#### Go's `log` and `log/slog` packages map to a custom logger factory using `Deno.stderr`/`Deno.stdout` for output targets and `JSON.stringify` for structured logging; timestamps vary with each run.
___
##### Run Command:

`$ deno run logging.ts`

##### Results:

`2026-05-06 23:13:13.294 standard logger`
`2026-05-06 23:13:13.294 with micro`
`2026-05-06 23:13:13.294 with file/line`
`2026-05-06 23:13:13.294 my:from mylog`
`2026-05-06 23:13:13.294 ohmy:from mylog`
`from buflog:2026-05-06 23:13:13.294 buf:hello`
`{"time":"2026-05-06T23:13:13.294Z","level":"INFO","msg":"hi there"}`
`{"time":"2026-05-06T23:13:13.294Z","level":"INFO","msg":"hello again","key":"val","age":25}`
