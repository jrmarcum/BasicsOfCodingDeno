enum ServerState {
    StateIdle = 0,
    StateConnected,
    StateError,
    StateRetrying,
}

const stateName: Record<ServerState, string> = {
    [ServerState.StateIdle]: "idle",
    [ServerState.StateConnected]: "connected",
    [ServerState.StateError]: "error",
    [ServerState.StateRetrying]: "retrying",
};

function stateString(s: ServerState): string {
    return stateName[s];
}

function transition(s: ServerState): ServerState {
    switch (s) {
        case ServerState.StateIdle:
            return ServerState.StateConnected;
        case ServerState.StateConnected:
        case ServerState.StateRetrying:
            return ServerState.StateIdle;
        case ServerState.StateError:
            return ServerState.StateError;
        default:
            throw new Error(`unknown state: ${stateString(s)}`);
    }
}

const ns: ServerState = transition(ServerState.StateIdle);
console.log(stateString(ns));

const ns2: ServerState = transition(ns);
console.log(stateString(ns2));
