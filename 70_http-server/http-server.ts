import http from 'node:http';

function hello(req: any, res: any): void {
    res.end("hello\n");
}

function headers(req: any, res: any): void {
    for (const [name, value] of Object.entries(req.headers as Record<string, string>)) {
        res.write(`${name}: ${value}\n`);
    }
    res.end();
}

const server = http.createServer((req: any, res: any) => {
    if (req.url === '/hello') return hello(req, res);
    if (req.url === '/headers') return headers(req, res);
    res.writeHead(404);
    res.end();
});

server.listen(8090, async () => {
    const base: string = "http://localhost:8090";

    const r1: Response = await fetch(`${base}/hello`);
    console.log(await r1.text());

    const r2: Response = await fetch(`${base}/headers`);
    console.log(await r2.text());

    server.close();
});
