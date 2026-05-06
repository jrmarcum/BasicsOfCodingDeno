#### Go's `testing` package maps to Deno's built-in test runner; `Deno.test()` replaces `func TestX(t *testing.T)`, `t.step()` groups subtests, and `assertEquals` from `jsr:@std/assert` replaces `t.Errorf`.
___
##### Run Command:

`$ deno test testing-and-benchmarking.ts`

##### Results:

`running 2 tests from ./testing-and-benchmarking.ts`
`IntMinBasic ... ok (0ms)`
`IntMinTableDriven ...`
`  0,1 ... ok (0ms)`
`  1,0 ... ok (0ms)`
`  2,-2 ... ok (0ms)`
`  0,-1 ... ok (0ms)`
`  -1,0 ... ok (0ms)`
`ok (0ms)`
``
`ok | 2 passed (5 steps) | 0 failed (0ms)`
