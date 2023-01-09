import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  loading: false,
  error: null,
  product: {},
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    getProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductSuccess: (state, { payload: product }) => {
      state.loading = false;
      state.error = null;
      state.product = product;
    },
    getProductFailure: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const { getProductStart, getProductSuccess, getProductFailure } = productSlice.actions;

export default productSlice.reducer;

export const productReducerSelector = (state) => state[productSlice.name];

export const productSelector = createSelector(
  productReducerSelector,
  ({ product, loading, error }) => ({ product, loading, error }),
);
