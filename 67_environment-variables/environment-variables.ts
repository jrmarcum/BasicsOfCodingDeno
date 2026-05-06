Deno.env.set("FOO", "1");
console.log("FOO:", Deno.env.get("FOO") ?? "");
console.log("BAR:", Deno.env.get("BAR") ?? "");

console.log();
for (const key of Object.keys(Deno.env.toObject())) {
    console.log(key);
}
