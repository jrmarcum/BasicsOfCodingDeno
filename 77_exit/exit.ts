import process from "node:process";

process.on('beforeExit', () => {
    console.log("!");
});

process.exit(3);
