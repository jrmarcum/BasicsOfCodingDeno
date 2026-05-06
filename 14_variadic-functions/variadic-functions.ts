function sum(...nums: number[]): void {
    Deno.stdout.writeSync(new TextEncoder().encode("[" + nums.join(" ") + "] "));
    const total: number = nums.reduce((acc: number, n: number) => acc + n, 0);
    console.log(total);
}

sum(1, 2);
sum(1, 2, 3);

const nums: number[] = [1, 2, 3, 4];
sum(...nums);
