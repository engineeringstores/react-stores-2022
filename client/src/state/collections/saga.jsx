import { createAction } from '@reduxjs/toolkit';
import { put, call, takeLeading } from 'redux-saga/effects';
import useAxios from '../../hooks/useAxios';
import {
  getCollectionsStart,
  getCollectionsSuccess,
  getCollectionsFailure,
} from './collectionsSlice';

export const getCollections = createAction('getCollectionsSaga');

export function* getCollectionsSaga() {
  const { axios } = useAxios();
  try {
    yield put(getCollectionsStart());
    const response = yield call(axios.get, '/collections');
    yield put(getCollectionsSuccess(response.data.collections));
  } catch (e) {
    yield put(getCollectionsFailure(e));
  }
}

export default function* collectionsSaga() {
  yield takeLeading(getCollections.type, getCollectionsSaga);
}
