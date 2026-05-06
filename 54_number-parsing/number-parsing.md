#### JavaScript uses `parseFloat`, `parseInt`, and `Number` for parsing. Parse failures return `NaN` rather than an error object. The error message format is kept identical to Go's for comparison. JavaScript prints `null` where Go prints `<nil>` for the absence of an error.
___
##### Run Command:

`$ deno run number-parsing.ts`

##### Results:

`1.234`
`123`
`456`
`789`
`135 null`
`strconv.Atoi: parsing "wat": invalid syntax`
