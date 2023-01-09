import { createAction } from '@reduxjs/toolkit';
import { put, call, takeLeading } from 'redux-saga/effects';
import useAxios from '../../hooks/useAxios';
import { getProductStart, getProductSuccess, getProductFailure } from './productSlice';

export const getProduct = createAction('getProductSaga');

export function* getProductSaga({ payload: { prodID } }) {
  const { axios } = useAxios();
  try {
    yield put(getProductStart());
    const response = yield call(axios.get, `/Products/${prodID}`);
    yield put(getProductSuccess(response.data?.product));
  } catch (e) {
    yield put(getProductFailure(e));
  }
}

export default function* productSaga() {
  yield takeLeading(getProduct.type, getProductSaga);
}
