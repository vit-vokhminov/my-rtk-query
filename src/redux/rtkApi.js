import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_TOKEN } from '../localstorage';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_TOKEN) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
