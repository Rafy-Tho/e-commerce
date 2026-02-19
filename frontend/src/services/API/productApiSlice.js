import { apiSlice } from './apiSlice';

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params = {}) => ({
        url: '/products',
        params,
      }),
    }),
    getProductsBrand: builder.query({
      query: () => ({
        url: '/products/brand',
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsBrandQuery } =
  productApiSlice;
