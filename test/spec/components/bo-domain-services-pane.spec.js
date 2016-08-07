import { mount, shallow } from 'enzyme';
import React from 'react';
import BoDomainServicesPane from '../../../src/client-src/components/bo-domain-services-pane';



describe('<BoDomainServicesPane/>', ()=> {

  let wrapper = null;
  let props = null;

  const getDomainDataClassName = '.domain-get-button';
  const getDomainTransferDataClassName = '.domain-transfer-get-button';
  const getDomainRegistryCheckDataClassName = '.registry-check-button';
  const getPremiumDomainDataClassName = '.premium-domain-data-button';

  beforeEach(() => {
    props = {
      onDomainGetClick: jasmine.createSpy(),
      onDomainTransferGetClick: jasmine.createSpy(),
      onRegistryCheckClick: jasmine.createSpy(),
      onPremiumDomainDataClick: jasmine.createSpy()
    };
    wrapper = mount(<BoDomainServicesPane {...props}/>);
  });

  const simulateClickAndAssertCallback = (callbackSpy, buttonClass) => {
    wrapper.find(buttonClass).simulate('click');
    expect(callbackSpy).toHaveBeenCalledTimes(1);
  };

  it('should trigger onDomainGetClick callback upon \'getDomainData\' button click', function () {
    simulateClickAndAssertCallback(props.onDomainGetClick, getDomainDataClassName);
  });

  it('should trigger onDomainTransferGetClick callback upon \'getDomainTransferData\' button click', function () {
    simulateClickAndAssertCallback(props.onDomainTransferGetClick, getDomainTransferDataClassName);
  });

  it('should trigger onRegistryCheckClick callback upon \'getDomainRegistryCheck\' button click', function () {
    simulateClickAndAssertCallback(props.onRegistryCheckClick, getDomainRegistryCheckDataClassName);
  });

  it('should trigger onPremiumDomainDataClick callback upon \'getPremiumDomainData\' button click', function () {
    simulateClickAndAssertCallback(props.onPremiumDomainDataClick, getPremiumDomainDataClassName);
  });


});