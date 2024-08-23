import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-rapidapi-key': 'bda3c80e36msh2f0e885190e0ef6p15d559jsn82c3f6b45c2e',
    'x-rapidapi-host': 'google-news13.p.rapidapi.com'}

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://google-news13.p.rapidapi.com'   }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/business?lr=en-US`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;