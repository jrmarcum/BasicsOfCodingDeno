#### The first three lines of output (using `Math.random()`) will vary with each run. The last two lines use a seeded PRNG (mulberry32 with seed 42) and will always produce the same values, demonstrating that the same seed yields the same sequence. JavaScript's `Math.random()` cannot be seeded — a custom PRNG is required for reproducible random numbers.
___
##### Run Command:

`$ deno run random-numbers.ts`

##### Results:

`81,87`
`0.6369986800554948`
`7.562567892023768,5.918789800890865`
`56,17`
`56,17`
