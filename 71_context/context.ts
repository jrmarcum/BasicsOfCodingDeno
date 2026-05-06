function slowOperation(signal: AbortSignal): Promise<string> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => resolve("hello\n"), 10000);
        signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(new Error("context canceled"));
        });
    });
}

(async (): Promise<void> => {
    const controller = new AbortController();

    console.log("server: hello handler started");

    setTimeout(() => controller.abort(), 100);

    try {
        const result = await slowOperation(controller.signal);
        Deno.stdout.writeSync(new TextEncoder().encode(result));
    } catch (e) {
        console.log("server:", (e as Error).message);
    }

    console.log("server: hello handler ended");
})();
