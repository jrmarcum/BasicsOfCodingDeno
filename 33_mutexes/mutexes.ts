class Container {
    counters: Record<string, number>;

    constructor() {
        this.counters = { a: 0, b: 0 };
    }

    inc(name: string): void {
        this.counters[name]++;
    }
}

const c = new Container();

async function doIncrement(name: string, n: number): Promise<void> {
    for (let i = 0; i < n; i++) {
        c.inc(name);
    }
}

(async (): Promise<void> => {
    await Promise.all([
        doIncrement("a", 10000),
        doIncrement("a", 10000),
        doIncrement("b", 10000),
    ]);
    console.log(c.counters);
})();
