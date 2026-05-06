type TemplateData = string | number | boolean | Record<string, unknown> | unknown[];

function render(tmpl: string, data: TemplateData): string {
    if (typeof data !== 'object' || data === null) {
        const val: string = String(data);
        return tmpl
            .replace(/\{\{if \.\}\}([\s\S]*?)\{\{else\}\}([\s\S]*?)\{\{end\}\}/g,
                (_, t: string, f: string) => data ? t : f)
            .replace(/\{\{if \.\}\}([\s\S]*?)\{\{end\}\}/g,
                (_, body: string) => data ? body : '')
            .replace(/\{\{\.\}\}/g, val);
    }
    if (Array.isArray(data)) {
        return tmpl.replace(/\{\{\.\}\}/g, '[' + (data as unknown[]).join(' ') + ']');
    }
    const obj = data as Record<string, unknown>;
    return tmpl
        .replace(/\{\{\.(\w+)\}\}/g, (_, k: string) => String(obj[k] ?? ''))
        .replace(/\{\{if \.(\w+)\}\}([\s\S]*?)\{\{else\}\}([\s\S]*?)\{\{end\}\}/g,
            (_, k: string, t: string, f: string) => obj[k] ? render(t, obj) : render(f, obj))
        .replace(/\{\{if \.(\w+)\}\}([\s\S]*?)\{\{end\}\}/g,
            (_, k: string, body: string) => obj[k] ? render(body, obj) : '')
        .replace(/\{\{range \.(\w+)\}\}([\s\S]*?)\{\{end\}\}/g,
            (_, k: string, body: string) => ((obj[k] as unknown[]) || []).map((item: unknown) =>
                typeof item === 'object' && item !== null
                    ? render(body, item as Record<string, unknown>)
                    : body.replace(/\{\{\.\}\}/g, String(item))
            ).join(''));
}

const enc = new TextEncoder();
const t1: string = "Value: {{.}}\n";
Deno.stdout.writeSync(enc.encode(render(t1, "some text")));
Deno.stdout.writeSync(enc.encode(render(t1, 5)));
Deno.stdout.writeSync(enc.encode(render(t1, ["Go", "Rust", "C++", "C#"])));

const t2: string = "Name: {{.Name}}\n";
Deno.stdout.writeSync(enc.encode(render(t2, { Name: "Jane Doe" })));
Deno.stdout.writeSync(enc.encode(render(t2, { Name: "Mickey Mouse" })));

const t3: string = "{{if .}}yes{{else}}no{{end}}\n";
Deno.stdout.writeSync(enc.encode(render(t3, "not empty")));
Deno.stdout.writeSync(enc.encode(render(t3, "")));

const t4: string = "Range: {{range .Items}}{{.}} {{end}}\n";
Deno.stdout.writeSync(enc.encode(render(t4, { Items: ["Go", "Rust", "C++", "C#"] })));
