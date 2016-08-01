import * as BoDomainServicesPaneActionTypes from '../constants/ActionTypes/bo-domain-services-pane'

const initialState = {};
const copyState = (state) => (JSON.parse(JSON.stringify(state)));

export default function createModelDlg(state = initialState, action) {
  let newState = copyState(state);
  switch (action.type) {
    case BoDomainServicesPaneActionTypes.SHOW_LOADER:
      newState.loader = true;
      return newState;

    case BoDomainServicesPaneActionTypes.CLOSE_LOADER:
      delete newState.loader;
      return newState;

    default:
      return state;
  }
}


