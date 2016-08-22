/**
 * Created by Ran_Zilberman on 17/05/2016.
 */

const createPostOptions = (payload) => {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  };
};

const verifyStatusCodeOk = (response) => {
  if (response.statusCode !== 200) {
    throw new Error(`DomainServerApi: Status code is ${response.statusCode}`);
  }
};

const getServerResponse = async (uri, params) => {
  const options = createPostOptions(params);
  try {
    let response = await fetch(uri, options);
    verifyStatusCodeOk(response);
    return response;
  } catch(error) {
    throw new Error(`DomainServerApi: Failed to get data from server when calling ${uri}: ${error}`);
  }
};

class DomainServerApi {

  async getDomainData(domainName) {
    return getServerResponse(`/bo/api/s3/domain/services/domainGet`, {domainName: domainName});
  }

  async getDomainTransferData(domainName) {
    return getServerResponse(`/bo/api/s3/domain/services/domainTransferGet`, {domainName: domainName});
  }

  async getRegistryCheckData(domainName) {
    return getServerResponse(`/bo/api/s3/domain/services/registryCheck`, {domainName: domainName});
  }

  async getPremiumDomainData(domainName) {
    return getServerResponse(`/bo/api/s3/domain/services/getWixDomain`, {domainName: domainName});
  }

}

export default new DomainServerApi();
