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
    getBrandNames: builder.query({
      query: () => ({
        url: '/products/brand/names',
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsBrandQuery,
  useGetBrandNamesQuery,
} = productApiSlice;
