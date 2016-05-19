/**
 * Created by Ran_Zilberman on 16/05/2016.
 */
import { call, put, take } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import ServerApiClient from '../client/ServerApiClient.js';

function* createFinancialModel(action) {
  yield put({ type: 'SHOW_WAITING_MODAL' });
  try {
    const response = yield call(() => ServerApiClient.createModel(action.modelName));
  } catch (e) {
    // trigger popup action
  }
  yield put({ type: 'CLOSE_WAITING_MODAL' });
}

export function* watchCreateFinancialModel() {
  yield* takeEvery('BEGIN_CREATE_FINANCIAL_MODEL_REQUEST', createFinancialModel)
}

