import * as BoDomainServicesPaneActionTypes from '../constants/action-types/bo-domain-services-pane'

const initialState = {};

export default function boDomainServicesPane(state = initialState, action) {
  let newState = Object.assign({}, state);
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


