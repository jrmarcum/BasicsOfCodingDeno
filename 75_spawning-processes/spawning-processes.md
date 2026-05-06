#### Go's `exec.Command` maps to `node:child_process` `spawnSync`; error handling uses `result.error.code` for spawn failures and `result.status` for non-zero exit codes.
___
##### Run Command:

`$ deno run --allow-run spawning-processes.ts`

##### Results:

`> deno --version`
`deno 2.x.x`
``
`failed executing: ENOENT`
``
`> via shell`
`deno 2.x.x`
