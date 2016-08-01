import request from 'request';
import * as ActionTypes from '../constants/ActionTypes/create-model-dlg'

let createModel = ({modelName}) => ({type:ActionTypes.CREATE_MODEL, modelName});
let showLoader = () => ({type: ActionTypes.SHOW_LOADER});
let closeLoader = () => ({type: ActionTypes.CLOSE_LOADER});

export default {
  createModel,
  showLoader,
  closeLoader
};
