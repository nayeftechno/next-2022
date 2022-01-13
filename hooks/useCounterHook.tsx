import { useState, useEffect, useMemo } from 'react';
type MakeLocalObservableType = {
    get: () => any;
    set: (value: any) => void;
    subscribe: (value: any) => void;
};
export function makeLocalObservable<T>(target: T): MakeLocalObservableType {
    let listeners: T[] = [];
    let value = target;
    function get() : T {
        return value;
    }
    function set(newValue: T) : void{
        if (value === newValue) return;
        value = newValue;
        listeners.forEach((l:any) => l(value));
    }
    function subscribe(listenerFunc: T) {
        listeners.push(listenerFunc);
        return () => unsubscribe(listenerFunc);
    }
    function unsubscribe(listenerFunc:T) {
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