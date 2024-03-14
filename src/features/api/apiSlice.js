import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ base: 'http://localgost:3500' }),
    tagTypes: ['Post'],
    endpoints: builder => ({}),
})