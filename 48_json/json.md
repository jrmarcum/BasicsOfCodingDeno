#### JavaScript has native JSON support via `JSON.stringify` and `JSON.parse`. When a parsed object is printed with `console.log`, Deno shows its inspection format (`{ num: 6.13, strs: [ 'a', 'b' ] }`) rather than JSON format. JSON key ordering follows object insertion order in JavaScript; Go's `encoding/json` sorts map keys alphabetically.
___
##### Run Command:

`$ deno run json.ts`

##### Results:

`true`
`1`
`2.34`
`"vector"`
`["apple","peach","pear"]`
`{"apple":5,"lettuce":7}`
`{"Page":1,"Fruits":["apple","peach","pear"]}`
`{"page":1,"fruits":["apple","peach","pear"]}`
`{ num: 6.13, strs: [ 'a', 'b' ] }`
`6.13`
`a`
`{1 [apple peach]}`
`apple`
`{"apple":5,"lettuce":7}`
