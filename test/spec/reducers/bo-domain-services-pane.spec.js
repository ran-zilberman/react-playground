import reducer from '../../../src/client-src/reducers/bo-domain-services-pane';
import BoDomainServicesPaneActions from '../../../src/client-src/actions/bo-domain-services-pane';


describe('Reducers: CreateModelDlg', function () {

  it('should return the initial state', () => {
    expect(reducer(undefined, {type: 'UNKNOWN'})).toEqual({});
  });

  it('should handle SHOW_LOADER', () => {
    expect(reducer(undefined, BoDomainServicesPaneActions.showLoader())).toEqual({loader: true});
  });

  it('should handle CLOSE_LOADER when loader flag is turned off', () => {
    expect(reducer(undefined, BoDomainServicesPaneActions.closeLoader())).toEqual({});
  });

  it('should handle CLOSE_LOADER when loader flag is turned on', () => {
    expect(reducer({loader: true}, BoDomainServicesPaneActions.closeLoader())).toEqual({});
  });

});