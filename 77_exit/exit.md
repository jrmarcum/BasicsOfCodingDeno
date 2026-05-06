#### Go's `os.Exit(3)` maps to `process.exit(3)`; like Go's `os.Exit`, it bypasses `beforeExit` handlers (the `!` never prints). Check the exit code with `$LASTEXITCODE` in PowerShell or `$?` in bash.
___
##### Run Command:

`$ deno run exit.ts`

`$ echo $LASTEXITCODE`

##### Results:

`3`
