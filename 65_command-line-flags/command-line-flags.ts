interface Flags {
    word: string;
    numb: number;
    fork: boolean;
    svar: string;
}

const flags: Flags = { word: "foo", numb: 42, fork: false, svar: "bar" };
const tail: string[] = [];

for (const arg of Deno.args) {
    if (arg.startsWith("-")) {
        const stripped: string = arg.replace(/^-+/, "");
        const eq: number = stripped.indexOf("=");
        const key: string = eq >= 0 ? stripped.slice(0, eq) : stripped;
        const val: string | undefined = eq >= 0 ? stripped.slice(eq + 1) : undefined;

        if (key === "word")      flags.word = val!;
        else if (key === "numb") flags.numb = parseInt(val!, 10);
        else if (key === "fork") flags.fork = val === undefined ? true : val === "true";
        else if (key === "svar") flags.svar = val!;
    } else {
        tail.push(arg);
    }
}

console.log("word:", flags.word);
console.log("numb:", flags.numb);
console.log("fork:", flags.fork);
console.log("svar:", flags.svar);
console.log("tail:", tail);
