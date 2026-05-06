type FlagValue = boolean | number | string;

interface FlagDefaults {
    [key: string]: FlagValue;
}

interface ParseResult {
    flags: FlagDefaults;
    tail: string[];
}

function parseFlags(args: string[], defaults: FlagDefaults): ParseResult {
    const flags: FlagDefaults = { ...defaults };
    const tail: string[] = [];
    for (const arg of args) {
        if (arg.startsWith("-")) {
            const stripped: string = arg.replace(/^-+/, "");
            const eq: number = stripped.indexOf("=");
            const key: string = eq >= 0 ? stripped.slice(0, eq) : stripped;
            const val: string | undefined = eq >= 0 ? stripped.slice(eq + 1) : undefined;
            if (key in flags) {
                const def: FlagValue = defaults[key];
                if (typeof def === "boolean") {
                    flags[key] = val === undefined ? true : val === "true";
                } else if (typeof def === "number") {
                    flags[key] = parseInt(val!, 10);
                } else {
                    flags[key] = val ?? "";
                }
            }
        } else {
            tail.push(arg);
        }
    }
    return { flags, tail };
}

const args: string[] = Deno.args;

if (args.length < 1) {
    console.log("expected 'foo' or 'bar' subcommands");
    Deno.exit(1);
}

const subcmd: string = args[0];
const rest: string[] = args.slice(1);

if (subcmd === "foo") {
    const { flags, tail } = parseFlags(rest, { enable: false, name: "" });
    console.log("subcommand 'foo'");
    console.log("  enable:", flags.enable);
    console.log("  name:", flags.name);
    console.log("  tail:", tail);
} else if (subcmd === "bar") {
    const { flags, tail } = parseFlags(rest, { level: 0 });
    console.log("subcommand 'bar'");
    console.log("  level:", flags.level);
    console.log("  tail:", tail);
} else {
    console.log("expected 'foo' or 'bar' subcommands");
    Deno.exit(1);
}
