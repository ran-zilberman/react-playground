import { mount, shallow } from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import CreateModelDlgContainer from '../../../src/client-src/containers/CreateModelDlgContainer';
import configureStore from '../../../src/client-src/store/configureStore';
import Actions from '../../../src/client-src/actions';


describe('<CreateModelDlgContainer/>', function () {

  let wrapper;
  let store;

  const createMockStore = () => {
    store = configureStore({});
    spyOn(store, 'dispatch');
    return store;
  };

  beforeEach(() => {
    wrapper = mount(<Provider store={createMockStore()}>
      <CreateModelDlgContainer/>
    </Provider>);
  });

  it('should have a submit button', function () {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should trigger create model action', function () {
    wrapper.find('button').simulate('click');
    expect(store.dispatch).toHaveBeenCalledWith(Actions.CreateModelDlg.createModel({modelName: ''}));
  });

});