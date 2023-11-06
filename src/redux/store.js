import { configureStore } from '@reduxjs/toolkit';
import { simpleApi } from './simpleApi';

export const store = configureStore({
    reducer: {
        [simpleApi.reducerPath]: simpleApi.reducer,
    },
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware().concat(simpleApi.middleware),
});
