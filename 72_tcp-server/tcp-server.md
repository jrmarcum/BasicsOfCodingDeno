#### Go's `net.Listen`/`net.Conn` TCP server maps to `node:net` via Deno's compatibility layer; this self-contained example starts a server, connects a client, exchanges a message, and closes cleanly.
___
##### Run Command:

`$ deno run --allow-net tcp-server.ts`

##### Results:

`ACK: HELLO`
