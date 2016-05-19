import request from 'request';

export const BEGIN_CREATE_FINANCIAL_MODEL_REQUEST = 'BEGIN_CREATE_FINANCIAL_MODEL_REQUEST';

let createModel = ({modelName}) => ({type:BEGIN_CREATE_FINANCIAL_MODEL_REQUEST, modelName});

export default {
  BEGIN_CREATE_FINANCIAL_MODEL_REQUEST,
  createModel
};
