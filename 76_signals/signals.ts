import process from "node:process";

let handled: boolean = false;

function onSignal(name: string): void {
    if (!handled) {
        handled = true;
        console.log();
        console.log("signal:", name);
        console.log("exiting");
    }
}

process.on('SIGINT', () => onSignal("interrupt"));
process.on('SIGTERM', () => onSignal("terminated"));

console.log("awaiting signal");

setTimeout(() => {
    process.emit('SIGINT');
}, 100);
