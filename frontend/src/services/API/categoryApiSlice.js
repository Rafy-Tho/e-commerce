import { apiSlice } from './apiSlice';

const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: '/categories',
      }),
    }),
    getCategory: builder.query({
      query: (id) => ({
        url: `/categories/${id}`,
      }),
    }),
  }),
});
export const { useGetCategoriesQuery, useGetCategoryQuery } = categoryApiSlice;
