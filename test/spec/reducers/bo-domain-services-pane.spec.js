import reducer from '../../../src/client-src/reducers/bo-domain-services-pane';
import BoDomainServicesPaneActions from '../../../src/client-src/actions/bo-domain-services-pane';


describe('Reducers: bo-domain-services-pane', function () {

  it('should return the initial state', () => {
    expect(reducer(undefined, {type: 'UNKNOWN'})).toEqual({});
  });

  it('should set state\'s loader flag to true when SHOW_LOADER action is triggered', () => {
    expect(reducer(undefined, BoDomainServicesPaneActions.showLoader())).toEqual({loader: true});
  });

  it('should remove state\'s loader flag when CLOSE_LOADER action is triggered', () => {
    expect(reducer(undefined, BoDomainServicesPaneActions.closeLoader())).toEqual({});
  });

  it('should return the state as is when CLOSE_LOADER action is triggered and state\'s loader flag is not present', () => {
    expect(reducer({loader: true}, BoDomainServicesPaneActions.closeLoader())).toEqual({});
  });

});