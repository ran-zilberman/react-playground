import * as ActionTypes from '../constants/ActionTypes/bo-domain-services-pane'

let domainGet = ({domainName}) => ({type:ActionTypes.DOMAIN_GET, domainName});
let domainTransferGet = ({domainName}) => ({type:ActionTypes.DOMAIN_TRANSFER_GET, domainName});
let showLoader = () => ({type: ActionTypes.SHOW_LOADER});
let closeLoader = () => ({type: ActionTypes.CLOSE_LOADER});

export default {
  domainGet,
  domainTransferGet,
  showLoader,
  closeLoader
};
