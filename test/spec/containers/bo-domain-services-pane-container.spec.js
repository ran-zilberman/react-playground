import { mount, shallow } from 'enzyme';
import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';
import React from 'react';
import BoDomainServicesPaneContainer from '../../../src/client-src/containers/bo-domain-services-pane-container';
import ServerUri from '../../../src/client-src/constants/ServerUri';
import ContentType from '../../../src/client-src/constants/ContentType';
import {Provider} from 'react-redux';
import configureStore from '../../../src/client-src//store/configure-store.js';
import rootSaga from '../../../src/client-src//sagas';

const dummyResultJsonObject = () => ({prop: 'value'});
const dummyResultXmlObject = () => '<xmlFakeResponse><fakeItem>1</fakeItem></xmlFakeResponse>';
const dummyXmlJsonRep = () => ({ xmlFakeResponse: { fakeItem: '1' } });
const responseParams = (contentType, result) => ({ body: result, headers: { 'content-type': contentType } });

const getDomainDataClassName = '.domain-get-button';
const jsonResultContainerClassName = '.json-result-container';

describe('BoDomainServicesPaneContainer', ()=> {

  let wrapper = null;

  beforeEach(() => {
    const store = configureStore();
    store.runSaga(rootSaga);
    wrapper = mount(<Provider store={store}><BoDomainServicesPaneContainer /></Provider>);
  });

  it('should display data when clicking on DomainGet', async done => {
    fetchMock.post(ServerUri.GET_DOMAIN_DATA, responseParams(ContentType.XML_CONTENT_TYPE, dummyResultXmlObject()) );
    wrapper.find(getDomainDataClassName).simulate('click');
    setTimeout(() => {
      expect(wrapper.find(jsonResultContainerClassName).length).toBe(1);
      done();
    }, 0);
  });

});