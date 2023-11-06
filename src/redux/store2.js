import { configureStore } from '@reduxjs/toolkit';
import { rtkApi } from './rtkApi';

export const store = configureStore({
    reducer: {
        [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware().concat(rtkApi.middleware),
});
