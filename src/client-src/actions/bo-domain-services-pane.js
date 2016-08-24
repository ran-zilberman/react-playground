import ActionTypes from '../constants/BoDomainServicesActionTypes'

let getDomainData = ({domainName}) => ({type:ActionTypes.GET_DOMAIN_DATA, domainName});
let getDomainTransferData = ({domainName}) => ({type:ActionTypes.GET_TRANSFER_DOMAIN_DATA, domainName});
let getDomainRegistryCheckData = ({domainName}) => ({type:ActionTypes.GET_DOMAIN_REGISTRY_DATA, domainName});
let getPremiumDomainData = ({domainName}) => ({type:ActionTypes.GET_PREMIUM_DOMAIN_DATA, domainName});
let showLoader = () => ({type: ActionTypes.SHOW_LOADER});
let closeLoader = () => ({type: ActionTypes.CLOSE_LOADER});

export default {
  getDomainData,
  getDomainTransferData,
  getDomainRegistryCheckData,
  getPremiumDomainData,
  showLoader,
  closeLoader
};
