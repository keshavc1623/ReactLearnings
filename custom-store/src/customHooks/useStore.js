import { useState, useEffect } from 'react';
import store from '../store/store';

export const useStore = (selector = (state) => state) => {
    const [state, setState] = useState(selector(store.getState())); // wraping the state in selector

    useEffect(() => store.subscribe((state) => setState(selector(state))), []);

    return state;
}