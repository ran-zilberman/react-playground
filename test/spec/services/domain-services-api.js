import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';
import DomainServerApi from '../../../src/client-src/services/domain-server-api'
import ContentType from '../../../src/client-src/constants/content-type'

const dummyResultJsonObject = () => ({prop: 'value'});

const dummyResultTextObject = () => 'blah blah';

const responseParams = (contentType, result) => ({ body: result, headers: { 'content-type': contentType } });

const assertApiFailure = async (uri, asyncMethod, done) => {
  fetchMock.mock(uri, 500 );
  try {
    const result = await asyncMethod();
  } catch (error) {
    expect(error.message).toEqual(`DomainServerApi request failed, response code 500`);
    done();
  }
};

const assertApiSuccess = async (method, expectedResult, done) => {
  const result = await method();
  expect(result).toEqual(expectedResult);
  done();
};

describe('DomainServicesApi', () => {

  afterEach(() => {
    fetchMock.restore();
  });

  describe('#getDomainData', () => {

    it('should return domain data', async done => {
      fetchMock.post('/bo/api/s3/domain/services/domainGet', responseParams(ContentType.XML_CONTENT_TYPE, dummyResultTextObject()) );
      assertApiSuccess(DomainServerApi.getDomainData, dummyResultTextObject(), done);
    });

    it('should return exception when request to domain data fails', async done => {
      assertApiFailure('/bo/api/s3/domain/services/domainGet', DomainServerApi.getDomainData, done);
    });

  });

  describe('#getDomainTransferData', () => {

    it('should return domain transfer data', async done => {
      fetchMock.post('/bo/api/s3/domain/services/domainTransferGet', responseParams(ContentType.XML_CONTENT_TYPE, dummyResultTextObject()) );
      assertApiSuccess(DomainServerApi.getDomainTransferData, dummyResultTextObject(), done);
    });

    it('should return exception when request to domain transfer data fails', async done => {
      assertApiFailure('/bo/api/s3/domain/services/domainTransferGet', DomainServerApi.getDomainTransferData, done);
    });

  });

  describe('#getRegistryCheckData', () => {

    it('should return domain registry data', async done => {
      fetchMock.post('/bo/api/s3/domain/services/registryCheck', responseParams(ContentType.XML_CONTENT_TYPE, dummyResultTextObject()) );
      assertApiSuccess(DomainServerApi.getRegistryCheckData, dummyResultTextObject(), done);
    });

    it('should return exception when request to domain registry data fails', async done => {
      assertApiFailure('/bo/api/s3/domain/services/registryCheck', DomainServerApi.getRegistryCheckData, done);
    });

  });

  describe('#getPremiumDomainData', () => {

    it('should return premium domain data', async done => {
      fetchMock.post('/bo/api/s3/domain/services/getWixDomain', responseParams(ContentType.JSON_CONTENT_TYPE, dummyResultJsonObject()) );
      assertApiSuccess(DomainServerApi.getPremiumDomainData, dummyResultJsonObject(), done);
    });

    it('should return exception when request to premium domain data fails', async done => {
      assertApiFailure('/bo/api/s3/domain/services/getWixDomain', DomainServerApi.getPremiumDomainData, done);
    });

  });

});