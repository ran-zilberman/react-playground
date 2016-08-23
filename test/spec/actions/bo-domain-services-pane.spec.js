import BoDomainServicesPaneActions from '../../../src/client-src/actions/bo-domain-services-pane';
import * as ActionTypes from '../../../src/client-src/constants/action-types/bo-domain-services-pane';

describe('Actions: bo-domain-services-pane', function () {
  
  it('should return GET_DOMAIN_DATA action object', function () {
    let domainName = 'blahhhh.com';
    const expectedAction = {
      type:ActionTypes.GET_DOMAIN_DATA,
      domainName
    };
    expect(BoDomainServicesPaneActions.getDomainData({domainName})).toEqual(expectedAction);
  });

  it('should return GET_TRANSFER_DOMAIN_DATA action object', function () {
    let domainName = 'blahhhh.com';
    const expectedAction = {
      type:ActionTypes.GET_TRANSFER_DOMAIN_DATA,
      domainName
    };
    expect(BoDomainServicesPaneActions.getDomainTransferData({domainName})).toEqual(expectedAction);
  });

  it('should return GET_DOMAIN_REGISTRY_DATA action object', function () {
    let domainName = 'blahhhh.com';
    const expectedAction = {
      type:ActionTypes.GET_DOMAIN_REGISTRY_DATA,
      domainName
    };
    expect(BoDomainServicesPaneActions.getDomainRegistryCheckData({domainName})).toEqual(expectedAction);
  });

  it('should return GET_PREMIUM_DOMAIN_DATA action object', function () {
    let domainName = 'blahhhh.com';
    const expectedAction = {
      type:ActionTypes.GET_PREMIUM_DOMAIN_DATA,
      domainName
    };
    expect(BoDomainServicesPaneActions.getPremiumDomainData({domainName})).toEqual(expectedAction);
  });

  it('should return SHOW_LOADER action object', function () {
    const expectedAction = {
      type: ActionTypes.SHOW_LOADER
    };
    expect(BoDomainServicesPaneActions.showLoader()).toEqual(expectedAction);
  });

  it('should return CLOSE_LOADER action object', function () {
    const expectedAction = {
      type: ActionTypes.CLOSE_LOADER
    };
    expect(BoDomainServicesPaneActions.closeLoader()).toEqual(expectedAction);
  });

});