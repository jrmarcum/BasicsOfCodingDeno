(async (): Promise<void> => {
    let ops: number = 0;

    const workers: Promise<void>[] = [];
    for (let i = 0; i < 50; i++) {
        workers.push((async (): Promise<void> => {
            for (let j = 0; j < 1000; j++) {
                ops++;
            }
        })());
    }

    await Promise.all(workers);
    console.log("ops:", ops);
})();
