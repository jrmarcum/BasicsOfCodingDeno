#### Time-dependent lines will vary with each run. JavaScript does not have a reference-time layout string like Go's `Mon Jan 2 15:04:05 MST 2006`; formatting is done manually using Date getter methods and template literals. The `Intl.DateTimeFormat` API is another option for locale-aware formatting.
___
##### Run Command:

`$ deno run time-formatting-parsing.ts`

##### Results:

`2026-05-04T21:30:00.000Z`
`2012-11-01T22:08:41.000Z`
`9:30PM`
`Sun May  4 21:30:00 2026`
`2026-05-04T21:30:00.000Z`
`0000-01-01T20:41:00.000Z`
`2026-05-04T21:30:00-00:00`
`null`
