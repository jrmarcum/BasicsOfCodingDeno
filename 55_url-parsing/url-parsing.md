#### JavaScript's built-in `URL` class (WHATWG URL API) is available globally in Deno. It handles scheme, credentials, host, port, path, query, and fragment. The query parameters are accessed via `URLSearchParams`. Unlike Go's `url.ParseQuery` which returns `map[string][]string`, JavaScript's `URLSearchParams` returns single values by default.
___
##### Run Command:

`$ deno run url-parsing.ts`

##### Results:

`postgres`
`user:pass`
`user`
`pass`
`host.com:5432`
`host.com`
`5432`
`/path`
`f`
`k=v`
`{ k: 'v' }`
`v`
