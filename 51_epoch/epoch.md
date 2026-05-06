#### All values will vary with each run since they reflect the current time. JavaScript represents Unix time in milliseconds (`Date.getTime()`). The nanosecond value is approximated by multiplying milliseconds by 1,000,000 since JavaScript's `Date` only has millisecond precision — unlike Go which has nanosecond precision via `time.UnixNano()`.
___
##### Run Command:

`$ deno run epoch.ts`

##### Results:

`2026-05-04T21:30:00.000Z`
`1746397800`
`1746397800000`
`1746397800000000000`
`2026-05-04T21:30:00.000Z`
`2026-05-04T21:30:00.000Z`
