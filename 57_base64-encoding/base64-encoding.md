#### Deno provides base64 encoding via `Buffer` from `node:buffer`. Standard encoding uses `+` and `/` with `=` padding; URL-safe encoding replaces `+` with `-` and `/` with `_`. The `base64url` encoding is supported natively.
___
##### Run Command:

`$ deno run base64-encoding.ts`

##### Results:

`YWJjMTIzIT8kKiYoKSctPUB+`
`abc123!?$*&()'-=@~`
``
`YWJjMTIzIT8kKiYoKSctPUB-`
`abc123!?$*&()'-=@~`
