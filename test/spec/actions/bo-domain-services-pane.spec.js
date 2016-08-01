import BoDomainServicesPaneActions from '../../../src/client-src/actions/bo-domain-services-pane';
import * as ActionTypes from '../../../src/client-src/constants/ActionTypes/bo-domain-services-pane';

describe('Actions: bo-domain-services-pane', function () {

  it('should return DOMAIN_GET action object', function () {
    let domainName = 'blahhhh.com';
    const expectedAction = {
      type:ActionTypes.DOMAIN_GET,
      modelName
    };
    expect(BoDomainServicesPaneActions.domainGet({domainName})).toEqual(expectedAction);
  });

  it('should return DOMAIN_TRANSFER_GET action object', function () {
    let domainName = 'blahhhh.com';
    const expectedAction = {
      type:ActionTypes.DOMAIN_TRANSFER_GET,
      modelName
    };
    expect(BoDomainServicesPaneActions.domainTransferGet({domainName})).toEqual(expectedAction);
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