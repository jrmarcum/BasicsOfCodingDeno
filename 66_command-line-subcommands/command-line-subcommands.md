#### JavaScript has no built-in subcommand routing. This lesson implements it manually by reading `Deno.args[0]` as the subcommand name and parsing the remaining arguments with a custom `parseFlags` function. The `tail` array uses Deno's inspection format (`[ 'a1', 'a2' ]`) whereas Go prints `[a1 a2]`.
___
##### Run Command:

`$ deno run command-line-subcommands.ts foo -enable -name=joe a1 a2`

##### Results:

`subcommand 'foo'`
`  enable: true`
`  name: joe`
`  tail: [ 'a1', 'a2' ]`

___

##### Run Command:

`$ deno run command-line-subcommands.ts bar -level=8 a1`

##### Results:

`subcommand 'bar'`
`  level: 8`
`  tail: [ 'a1' ]`
