const sleep = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
    const timeout = new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error(label)), ms)
    );
    return Promise.race([promise, timeout]);
}

(async (): Promise<void> => {
    try {
        const res = await withTimeout(sleep(200).then(() => "result 1"), 100, "timeout 1");
        console.log(res);
    } catch (e) {
        console.log((e as Error).message);
    }

    try {
        const res = await withTimeout(sleep(200).then(() => "result 2"), 300, "timeout 2");
        console.log(res);
    } catch (e) {
        console.log((e as Error).message);
    }
})();
