const i: number = 2;
Deno.stdout.writeSync(new TextEncoder().encode("write " + i + " as "));
switch (i) {
    case 1: console.log("one"); break;
    case 2: console.log("two"); break;
    case 3: console.log("three"); break;
}

const day: number = new Date().getDay();
switch (day) {
    case 0:
    case 6:
        console.log("It's the weekend");
        break;
    default:
        console.log("It's a weekday");
}

const hour: number = new Date().getHours();
if (hour < 12) {
    console.log("It's before noon");
} else {
    console.log("It's after noon");
}

function whatAmI(x: unknown): string {
    switch (typeof x) {
        case "boolean": return "bool";
        case "number":  return "int";
        default:        return `unknown type ${typeof x}`;
    }
}
console.log(whatAmI(true));
console.log(whatAmI(1));
console.log(whatAmI("hey"));
