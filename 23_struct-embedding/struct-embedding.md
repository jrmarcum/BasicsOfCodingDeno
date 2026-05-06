#### Go struct embedding is simulated in JavaScript with object composition — a `Container` class holds a `Base` instance and promotes its fields and methods via a getter and delegation.
___
##### Run Command:

`$ deno run struct-embedding.ts`

##### Results:

`co={num: 1, str: some name}`
`also num: 1`
`describe: base with num=1`
`describer: base with num=1`
