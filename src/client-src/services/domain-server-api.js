/**
 * Created by Ran_Zilberman on 17/05/2016.
 */

import ContentType from '../constants/ContentType';
import ServerUri from '../constants/ServerUri';

const createPostOptions = (payload, contentType) => {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': contentType
    },
    body: JSON.stringify(payload)
  };
};

const verifyStatusCodeOkOrThrow = (response) => {
  if (!response.ok) {
    throw new Error(`DomainServerApi request failed, response code ${response.status}`);
  }
};

const extractData = (response) => {
  if (response.headers.get('Content-Type') === ContentType.JSON_CONTENT_TYPE) {
    return response.json();
  } else {
    return response.text();
  }
};

const getServerResponse = async (uri, params, contentType) => {
  const options = createPostOptions(params, contentType);
  let response = await fetch(uri, options);
  verifyStatusCodeOkOrThrow(response);
  return extractData(response);
};

class DomainServerApi {

  async getDomainData(domainName) {
    return getServerResponse(ServerUri.GET_DOMAIN_DATA, {domainName: domainName}, ContentType.XML_CONTENT_TYPE);
  }

  async getDomainTransferData(domainName) {
    return getServerResponse(ServerUri.GET_DOMAIN_TRANSFER_DATA, {domainName: domainName}, ContentType.XML_CONTENT_TYPE);
  }

  async getRegistryCheckData(domainName) {
    return getServerResponse(ServerUri.GET_DOMAIN_REGISTRY_CHECK, {domainName: domainName}, ContentType.XML_CONTENT_TYPE);
  }

  async getPremiumDomainData(domainName) {
    return getServerResponse(ServerUri.GET_PREMIUM_DOMAIN_DATA, {domainName: domainName}, ContentType.JSON_CONTENT_TYPE);
  }

}

export default new DomainServerApi();
