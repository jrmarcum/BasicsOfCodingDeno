#### The environment variable names printed after the blank line will vary by operating system and user environment. `Deno.env.get()` reads a variable, `Deno.env.set()` modifies it for the current process, and `Deno.env.toObject()` returns all variables as a plain object — equivalent to Go's `os.Getenv`, `os.Setenv`, and `os.Environ()`.
___
##### Run Command:

`$ deno run --allow-env environment-variables.ts`

##### Results:

`FOO: 1`
`BAR: `
``
`PATH`
`COMPUTERNAME`
`...`
