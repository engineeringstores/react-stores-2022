import { createAction } from '@reduxjs/toolkit';
import { put, call, takeLeading } from 'redux-saga/effects';
import useAxios from '../../hooks/useAxios';
import { getProductsStart, getProductsSuccess, getProductsFailure } from './productCollectionSlice';

export const getProducts = createAction('getProductsSaga');

export function* getProductsSaga({ payload: { collectionID } }) {
  const { axios } = useAxios();
  try {
    yield put(getProductsStart());
    const response = yield call(axios.get, `/collections/${collectionID}`);
    yield put(getProductsSuccess(response.data?.products));
  } catch (e) {
    yield put(getProductsFailure(e));
  }
}

export default function* productsSaga() {
  yield takeLeading(getProducts.type, getProductsSaga);
}
