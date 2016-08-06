
import { call, put, fork} from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import ServerApiClient from '../client/ServerApiClient.js';
import actions from '../actions/bo-domain-services-pane'
import * as ActionTypes from '../constants/ActionTypes/bo-domain-services-pane'

// ============================================================================
// SAGA TASKS
// ============================================================================

const executeDomainDataCall = function*(method, action) {
  yield put(actions.showLoader());
  try {
    const response = yield call(() => method(action.domainName));
  } catch (e) {
    // trigger popup action
  }
  yield put(actions.closeLoader());
};

const getDomainData = function*(action) {
  executeDomainDataCall(ServerApiClient.getDomainData, action);
};

const getDomainTransferData = function*(action) {
  executeDomainDataCall(ServerApiClient.getDomainTransferData, action);
};

const getRegistryCheckData = function*(action) {
  executeServerCall(ServerApiClient.getRegistryCheckData, action);
};

const getPremiumDomainData = function*(action) {
  executeDomainDataCall(ServerApiClient.getPremiumDomainData, action);
};

// ============================================================================
// WATCHERS
// ============================================================================

const waiter = (EVENT, handler) => function*() {
    yield* takeEvery(EVENT, handler);
};

const waitForDomainGet = waiter(ActionTypes.DOMAIN_GET, domainGet);
const waitForDomainTransferGet = waiter(ActionTypes.DOMAIN_TRANSFER_GET, domainTransferGet);

// ============================================================================
// DEFAULT SAGA EXPORT
// ============================================================================

export default function* domainRootSage() {
  yield [
    fork(waitForDomainGet)
  ];
}