function f(from: string): void {
    for (let i = 0; i < 3; i++) {
        console.log(from, ":", i);
    }
}

f("direct");

setTimeout(() => f("goroutine"), 0);

setTimeout(() => console.log("going"), 0);

setTimeout(() => console.log("done"), 0);
