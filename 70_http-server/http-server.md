#### Go's `net/http` server maps to Node.js `http.createServer` via Deno's `node:http` compatibility layer; this self-contained example starts a server, makes requests to `/hello` and `/headers`, prints the responses, then closes.
___
##### Run Command:

`$ deno run --allow-net http-server.ts`

##### Results:

`hello`
``
`connection: keep-alive`
`user-agent: Deno/2.x.x`
`accept: */*`
`host: localhost:8090`
`accept-encoding: gzip, deflate, br`
``
