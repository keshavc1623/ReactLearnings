function CreateStore(initialSate){
    let currentState = initialSate;
    const listeners = new Set();

    return {
        getState: () => currentState,
        setState: (newState) => {
            currentState = newState;
            listeners.forEach((listener) => listener(currentState))
        }, 
        subscribe: (listener) => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        }
    }
}

const store = CreateStore({
    value1: 0,
    value2: 0
});

export default store;