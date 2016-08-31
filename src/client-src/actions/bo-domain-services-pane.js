import ActionTypes from '../constants/BoDomainServicesActionTypes'

let getDomainData = ({domainName}) => ({type:ActionTypes.GET_DOMAIN_DATA, domainName});
let getDomainTransferData = ({domainName}) => ({type:ActionTypes.GET_TRANSFER_DOMAIN_DATA, domainName});
let getDomainRegistryCheckData = ({domainName}) => ({type:ActionTypes.GET_DOMAIN_REGISTRY_DATA, domainName});
let getPremiumDomainData = ({domainName}) => ({type:ActionTypes.GET_PREMIUM_DOMAIN_DATA, domainName});
let gotDataFromServer = ({response}) => ({type:ActionTypes.GOT_DATA_FROM_SERVER, response});
let showLoader = () => ({type: ActionTypes.SHOW_LOADER});
let closeLoader = () => ({type: ActionTypes.CLOSE_LOADER});

export default {
  getDomainData,
  getDomainTransferData,
  getDomainRegistryCheckData,
  getPremiumDomainData,
  gotDataFromServer,
  showLoader,
  closeLoader
};
