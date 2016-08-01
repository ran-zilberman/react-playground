import * as ActionTypes from '../constants/ActionTypes/create-model-dlg'

const initialState = {};

export default function createModelDlg(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ActionTypes.SHOW_LOADER:
      newState.loader = true;
      return newState;

    case ActionTypes.CLOSE_LOADER:
      delete newState.loader;
      return newState;

    default:
      return state;
  }
}


