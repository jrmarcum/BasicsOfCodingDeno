import net from 'node:net';

const server = net.createServer((conn: any) => {
    let buf: string = '';
    conn.on('data', (chunk: Buffer) => {
        buf += chunk.toString();
        if (buf.includes('\n')) {
            const msg: string = buf.trim();
            conn.write(`ACK: ${msg.toUpperCase()}\n`, () => conn.end());
        }
    });
});

server.listen(7777, () => {
    const client = new net.Socket();
    client.connect(7777, 'localhost', () => {
        client.write("hello\n");
        client.once('data', (data: Buffer) => {
            Deno.stdout.writeSync(new TextEncoder().encode(data.toString()));
            client.destroy();
            server.close();
        });
    });
});
