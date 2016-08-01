import * as ActionTypes from '../constants/ActionTypes/create-model-dlg'

const initialState = {};
const copyState = (state) => (JSON.parse(JSON.stringify(state)));

export default function createModelDlg(state = initialState, action) {
  let newState = copyState(state);
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


