const argsWithProg: string[] = Deno.args;
const argsWithoutProg: string[] = Deno.args;

const arg: string = Deno.args[2];

console.log(argsWithProg);
console.log(argsWithoutProg);
console.log(arg);
