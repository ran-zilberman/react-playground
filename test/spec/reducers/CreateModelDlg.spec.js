import reducer from '../../../src/client-src/reducers/CreateModelDlg';
import Actions from '../../../src/client-src/actions/CreateModelDlg';


describe('Reducers: CreateModelDlg', function () {

  it('should return the initial state', () => {
    expect(reducer(undefined, {type: 'UNKNOWN'})).toEqual({});
  });

  it('should handle SHOW_LOADER', () => {
    expect(reducer(undefined, Actions.showLoader())).toEqual({loader: true});
  });

  it('should handle CLOSE_LOADER when loader flag is turned off', () => {
    expect(reducer(undefined, Actions.closeLoader())).toEqual({});
  });

  it('should handle CLOSE_LOADER when loader flag is turned on', () => {
    expect(reducer({loader: true}, Actions.closeLoader())).toEqual({});
  });

});