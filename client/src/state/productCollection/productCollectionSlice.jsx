import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  loading: false,
  error: null,
  products: [],
};

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductsSuccess: (state, { payload: products }) => {
      state.loading = false;
      state.error = null;
      state.products = products;
    },
    getProductsFailure: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } = productsSlice.actions;

export default productsSlice.reducer;

export const productsReducerSelector = (state) => state[productsSlice.name];

export const productsSelector = createSelector(
  productsReducerSelector,
  ({ products, loading, error }) => ({ products, loading, error }),
);
