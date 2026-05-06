(async (): Promise<void> => {
    let resolveMessage!: (value: string) => void;
    const messages = new Promise<string>(resolve => {
        resolveMessage = resolve;
    });

    setTimeout(() => resolveMessage("ping"), 0);

    const msg: string = await messages;
    console.log(msg);
})();
