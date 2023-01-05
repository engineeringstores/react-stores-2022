import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  loading: false,
  error: null,
  collections: [],
};

const collectionsSlice = createSlice({
  name: 'collectionsSlice',
  initialState,
  reducers: {
    getCollectionsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCollectionsSuccess: (state, { payload: collections }) => {
      state.loading = false;
      state.error = null;
      state.collections = collections;
    },
    getCollectionsFailure: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const { getCollectionsStart, getCollectionsSuccess, getCollectionsFailure } =
  collectionsSlice.actions;

export default collectionsSlice.reducer;

export const collectionsReducerSelector = (state) => state[collectionsSlice.name];

export const collectionsSelector = createSelector(
  collectionsReducerSelector,
  ({ collections, loading, error }) => ({ collections, loading, error }),
);
