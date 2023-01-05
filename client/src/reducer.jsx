import { combineReducers } from '@reduxjs/toolkit';

import collectionsSlice from './state/collections/collectionsSlice';
import productSlice from './state/product/productSlice';
import productsSlice from './state/productCollection/productCollectionSlice';

const rootReducer = combineReducers({
  collectionsSlice,
  productSlice,
  productsSlice,
});

export default rootReducer;
