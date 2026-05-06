function mayPanic(): void {
    throw new Error("a problem");
}

function main(): void {
    try {
        mayPanic();
        console.log("After mayPanic()");
    } catch (r) {
        console.log("Recovered. Error:\n", (r as Error).message);
    }
}

main();
