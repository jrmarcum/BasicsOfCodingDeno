interface Writer {
    write(s: string): void;
}

interface Logger {
    println(msg: string): void;
    setPrefix(p: string): void;
}

function newLogger(prefix: string, stream: Writer): Logger {
    let pfx: string = prefix;
    return {
        println(msg: string): void {
            const ts = new Date().toISOString().replace('T', ' ').slice(0, 23);
            stream.write(`${ts} ${pfx}${msg}\n`);
        },
        setPrefix(p: string): void {
            pfx = p;
        },
    };
}

const enc = new TextEncoder();
const stdlog = newLogger('', { write: (s: string) => Deno.stderr.writeSync(enc.encode(s)) });
stdlog.println("standard logger");
stdlog.println("with micro");
stdlog.println("with file/line");

const mylog = newLogger("my:", { write: (s: string) => Deno.stdout.writeSync(enc.encode(s)) });
mylog.println("from mylog");

mylog.setPrefix("ohmy:");
mylog.println("from mylog");

let buf: string = "";
const buflog = newLogger("buf:", { write: (s: string) => { buf += s; } });
buflog.println("hello");
Deno.stdout.writeSync(enc.encode("from buflog:" + buf));

function slogInfo(msg: string, ...pairs: unknown[]): void {
    const obj: Record<string, unknown> = {
        time: new Date().toISOString(),
        level: "INFO",
        msg,
    };
    for (let i = 0; i < pairs.length; i += 2) {
        obj[String(pairs[i])] = pairs[i + 1];
    }
    Deno.stderr.writeSync(enc.encode(JSON.stringify(obj) + "\n"));
}

slogInfo("hi there");
slogInfo("hello again", "key", "val", "age", 25);
