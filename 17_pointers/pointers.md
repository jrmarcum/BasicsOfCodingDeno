#### JavaScript has no pointers. Primitive values (numbers, strings, booleans) are always passed by value. Objects are passed by reference. This lesson demonstrates the equivalent concept: `zeroval` receives a copy of the number (no effect on the original), while `zeroref` receives an object reference and mutates it, mirroring Go's pointer receiver behavior. There are no memory addresses to print.
___
##### Run Command:

`$ deno run pointers.ts`

##### Results:

`initial: 1`
`zeroval: 1`
`zeroref: 0`
`reference: { val: 0 }`
