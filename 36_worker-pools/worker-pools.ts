const sleep = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));

async function worker(id: number, getJob: () => number | null): Promise<void> {
    let j: number | null;
    while ((j = getJob()) !== null) {
        console.log(`worker ${id} started  job ${j}`);
        await sleep(50);
        console.log(`worker ${id} finished job ${j}`);
    }
}

(async (): Promise<void> => {
    const jobs: number[] = [1, 2, 3, 4, 5];
    let idx: number = 0;
    const getJob = (): number | null => (idx < jobs.length ? jobs[idx++] : null);

    await Promise.all([
        worker(1, getJob),
        worker(2, getJob),
        worker(3, getJob),
    ]);
})();
