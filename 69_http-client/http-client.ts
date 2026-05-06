(async (): Promise<void> => {
    const resp: Response = await fetch("https://gobyexample.com");
    console.log("Response status:", resp.status);

    const text: string = await resp.text();
    const lines: string[] = text.split('\n');
    for (let i = 0; i < 5 && i < lines.length; i++) {
        console.log(lines[i]);
    }
})();
