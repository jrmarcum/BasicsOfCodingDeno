#### Go's channel-ticker rate limiter maps to a `sleep`-based throttle and a token-bucket burst pattern; request timestamps vary with each run.
___
##### Run Command:

`$ deno run rate-limiting.ts`

##### Results:

`request 1 2026-05-06T23:13:08.964Z`
`request 2 2026-05-06T23:13:08.996Z`
`request 3 2026-05-06T23:13:09.027Z`
`request 4 2026-05-06T23:13:09.059Z`
`request 5 2026-05-06T23:13:09.090Z`
`request 1 2026-05-06T23:13:09.090Z`
`request 2 2026-05-06T23:13:09.090Z`
`request 3 2026-05-06T23:13:09.090Z`
`request 4 2026-05-06T23:13:09.121Z`
`request 5 2026-05-06T23:13:09.152Z`
