// import reducer from '../../../src/client-src/reducers/create-model-dlg';
// import CreateModelDlgActions from '../../../src/client-src/actions/create-model-dlg';
//
//
// describe('Reducers: create-model-dlg', function () {
//
//   it('should return the initial state', () => {
//     expect(reducer(undefined, {type: 'UNKNOWN'})).toEqual({});
//   });
//
//   it('should handle SHOW_LOADER', () => {
//     expect(reducer(undefined, CreateModelDlgActions.showLoader())).toEqual({loader: true});
//   });
//
//   it('should handle CLOSE_LOADER when loader flag is turned off', () => {
//     expect(reducer(undefined, CreateModelDlgActions.closeLoader())).toEqual({});
//   });
//
//   it('should handle CLOSE_LOADER when loader flag is turned on', () => {
//     expect(reducer({loader: true}, CreateModelDlgActions.closeLoader())).toEqual({});
//   });
//
// });