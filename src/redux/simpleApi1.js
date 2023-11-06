import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const simpleApi = createApi({
    reducerPath: 'simpleApi', // как будет отображаться в store
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (build) => ({
        getGoods: build.query({
            query: (limit = '') => 'goods', // дополнение к базовому адресу
        }),
    }),
});

export const { useGetGoodsQuery } = simpleApi;
