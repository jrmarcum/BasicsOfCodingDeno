const sleep = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));

(async (): Promise<void> => {
    const c1: Promise<string> = sleep(100).then(() => "one");
    const c2: Promise<string> = sleep(200).then(() => "two");

    await Promise.all([
        c1.then((v: string) => console.log("received", v)),
        c2.then((v: string) => console.log("received", v)),
    ]);
})();
