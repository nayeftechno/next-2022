import { useState, useEffect, useMemo } from 'react';
function makeLocalObservable(target: any) {
    
    let listeners: any[] = [];
    let value = target;

    function get() {
        return value;
    }

    function set(newValue: any) {
        if (value === newValue) return;
        value = newValue;
        listeners.forEach((l: any) => l(value));
    }

    function subscribe(listenerFunc: any) {
        listeners.push(listenerFunc);
        return () => unsubscribe(listenerFunc);
    }

    function unsubscribe(listenerFunc: any) {
        listeners = listeners.filter((l: any) => l !== listenerFunc);
    }

    return {
        get,
        set,
        subscribe,
    };
}

const userStore = makeLocalObservable({ counter: 0, visible: false });

function useCounterHook() {
    const [state, setState] = useState(userStore.get());
    useEffect(() => {
        return userStore.subscribe(setState);
    }, []);
    const actions = useMemo(() => {
        return {
            increase: () => userStore.set({ ...state, counter: state.counter + 1 }),
            toggleVisible: (visible: boolean) => userStore.set({ ...state, visible: visible })
        }
    }, [state])
    return [state, actions]
};
export default useCounterHook;