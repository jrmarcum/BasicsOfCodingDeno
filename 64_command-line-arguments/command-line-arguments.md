#### In Deno, `Deno.args` contains only the user-supplied arguments — there is no program-name prefix as in Node.js's `process.argv[0]`/`[1]`. The third user argument (`c`, at `Deno.args[2]`) matches Go's `os.Args[3]`.
___
##### Run Command:

`$ deno run command-line-arguments.ts a b c d`

##### Results:

`[ 'a', 'b', 'c', 'd' ]`
`[ 'a', 'b', 'c', 'd' ]`
`c`
