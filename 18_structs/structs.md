#### JavaScript has no built-in struct type. This lesson uses plain objects (created via factory functions) as the equivalent. The `&` prefix used in Go to indicate pointer-to-struct (e.g., `&{Ann 40}`) does not exist in JavaScript — all object variables are effectively references.
___
##### Run Command:

`$ deno run structs.ts`

##### Results:

`{Bob 20}`
`{Alice 30}`
`{Fred 0}`
`{Ann 42}`
`{Jon 42}`
`Sean`
`50`
`51`
`{Rex true}`
