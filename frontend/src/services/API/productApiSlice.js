import { apiSlice } from './apiSlice';

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ query }) => ({
        url: '/products',
        params: { query },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
