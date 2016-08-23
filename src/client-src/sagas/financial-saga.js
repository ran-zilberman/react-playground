/**
 * Created by Ran_Zilberman on 16/05/2016.
 */
import { call, put, take } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import ServerApiClient from '../services/domain-server-api.js';
import actions from '../actions/bo-domain-services-pane'
import * as ActionTypes from '../constants/action-types/create-model-dlg'

function* createFinancialModel(action) {
  yield put(actions.showLoader());
  try {
    const response = yield call(() => ServerApiClient.createModel(action.modelName));
  } catch (e) {
    // trigger popup action
  }
  yield put(actions.closeLoader());
}

export function* watchCreateFinancialModel() {
  yield* takeEvery(ActionTypes.CREATE_MODEL, createFinancialModel)
}

