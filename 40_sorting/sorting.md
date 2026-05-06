#### JavaScript's `Array.prototype.sort()` sorts strings lexicographically by default. A numeric comparator `(a, b) => a - b` is required for correct integer sorting. Deno displays arrays with comma-separated quoted elements rather than Go's space-separated unquoted format (e.g., `[ 'a', 'b', 'c' ]` vs `[a b c]`).
___
##### Run Command:

`$ deno run sorting.ts`

##### Results:

`Strings: [ 'a', 'b', 'c' ]`
`Ints:    [ 2, 4, 7 ]`
`Sorted:  true`
