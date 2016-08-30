import domainSaga                  from '../../../src/client-src/sagas/domain-saga';
import actions                     from '../../../src/client-src/actions/bo-domain-services-pane';
import actionTypes                 from '../../../src/client-src/constants/BoDomainServicesActionTypes';
import DomainServerApi             from '../../../src/client-src/services/domain-server-api'
import SagaIntegrationTester       from '../../../src/client-src/testHelper/SagaIntegrationTester.js';

describe('BO Domain Saga', () => {

  let sagaIntegrationTester = null;

  const boDomainServicesReducer = (state, action) => {
    if (action.type ===  ActionTypes.SHOW_LOADER){
      return {loader: true};
    }
    return {loader: false};
  };

  beforeEach(() => {
    sagaIntegrationTester = new SagaIntegrationTester({}, 'boDomainServicesReducer', {boDomainServicesReducer: boDomainServicesReducer});
  });

  let testSaga = (action, actionType) => {
    sagaIntegrationTester.start(domainSaga).withAction(actions[action]("domainName"));
    expect(sagaIntegrationTester.numCalled(actionTypes.SHOW_LOADER)).toEqual(1);
    expect(sagaIntegrationTester.numCalled(actionType)).toEqual(1);
    expect(sagaIntegrationTester.numCalled(actionTypes.CLOSE_LOADER)).toEqual(1);
    expect(sagaIntegrationTester.getActionExecutionOrder(actionType)).toEqual(0);
    expect(sagaIntegrationTester.getActionExecutionOrder(actionTypes.SHOW_LOADER)).toEqual(1);
    expect(sagaIntegrationTester.getActionExecutionOrder(actionTypes.CLOSE_LOADER)).toEqual(2);
  };

  describe(`'GET_DOMAIN_DATA' handler`, () => {
    it('return domain data while showing loader upon waiting for response ', () => {
      spyOn(DomainServerApi, 'getDomainData').and.returnValue({});
      testSaga('getDomainData', actionTypes.GET_DOMAIN_DATA);
    });

    it('close loader upon failure', () => {
      spyOn(DomainServerApi, 'getDomainData').and.callFake(function() { throw new Error() });
      testSaga('getDomainData', actionTypes.GET_DOMAIN_DATA);
    });
  });

  describe(`'GET_TRANSFER_DOMAIN_DATA' handler`, () => {
    it('return transfer domain data while showing loader upon waiting for response ', () => {
      spyOn(DomainServerApi, 'getDomainTransferData').and.returnValue({});
      testSaga('getDomainTransferData', actionTypes.GET_TRANSFER_DOMAIN_DATA);
    });

    it('close loader upon failure', () => {
      spyOn(DomainServerApi, 'getDomainTransferData').and.callFake(function() { throw new Error() });
      testSaga('getDomainTransferData', actionTypes.GET_TRANSFER_DOMAIN_DATA);
    });
  });

  describe(`'GET_DOMAIN_REGISTRY_DATA' handler`, () => {
    it('return domain registry data while showing loader upon waiting for response ', () => {
      spyOn(DomainServerApi, 'getRegistryCheckData').and.returnValue({});
      testSaga('getDomainRegistryCheckData', actionTypes.GET_DOMAIN_REGISTRY_DATA);
    });

    it('close loader upon failure', () => {
      spyOn(DomainServerApi, 'getRegistryCheckData').and.callFake(function() { throw new Error() });
      testSaga('getDomainRegistryCheckData', actionTypes.GET_DOMAIN_REGISTRY_DATA);
    });
  });

  describe(`'GET_PREMIUM_DOMAIN_DATA' handler`, () => {
    it('return domain premium data while showing loader upon waiting for response ', () => {
      spyOn(DomainServerApi, 'getPremiumDomainData').and.returnValue({});
      testSaga('getPremiumDomainData', actionTypes.GET_PREMIUM_DOMAIN_DATA);
    });

    it('close loader upon failure', () => {
      spyOn(DomainServerApi, 'getPremiumDomainData').and.callFake(function() { throw new Error() });
      testSaga('getPremiumDomainData', actionTypes.GET_PREMIUM_DOMAIN_DATA);
    });
  });
});
