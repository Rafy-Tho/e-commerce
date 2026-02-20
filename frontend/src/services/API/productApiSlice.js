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
    getProductDetail: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsBrandQuery,
  useGetBrandNamesQuery,
  useGetProductDetailQuery,
} = productApiSlice;
