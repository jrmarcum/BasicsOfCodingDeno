class ArgError extends Error {
    arg: number;
    msg: string;

    constructor(arg: number, msg: string) {
        super(`${arg} - ${msg}`);
        this.arg = arg;
        this.msg = msg;
    }
}

interface Result {
    val: number;
    err: Error | null;
}

function f(arg: number): Result {
    if (arg === 42) {
        return { val: -1, err: new ArgError(arg, "can't work with it") };
    }
    return { val: arg + 3, err: null };
}

const { err } = f(42);
if (err instanceof ArgError) {
    console.log(err.arg);
    console.log(err.msg);
} else {
    console.log("err doesn't match ArgError");
}
