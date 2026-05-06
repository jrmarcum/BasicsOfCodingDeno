const sleep = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));

async function worker(id: number): Promise<void> {
    console.log(`Worker ${id} starting`);
    await sleep(50);
    console.log(`Worker ${id} done`);
}

(async (): Promise<void> => {
    const workers: Promise<void>[] = [];
    for (let i = 1; i <= 5; i++) {
        workers.push(worker(i));
    }
    await Promise.all(workers);
})();
