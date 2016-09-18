import BoDomainServicesPaneActions from '../../actions/bo-domain-services-pane';
import { connect } from 'react-redux';
import BoDomainServicesPane from '../../components/bo-domain-services-pane';
import { createSelector } from 'reselect';

const getData = state => {
  if(state.BoDomainServicesPane.jsonData && state.BoDomainServicesPane.jsonData.serviceResponse ) {
    return state.BoDomainServicesPane.jsonData.serviceResponse.response
  }

  return state.BoDomainServicesPane.jsonData;
};

const unCamelCase = (str) => {
  return str
  // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, function(str){ return str.toUpperCase(); })
};

const toHumanReadableObject = (data) => {
  if(!data) return data;

  const result = Array.isArray(data) ? [] : {};

  Object.entries(data).forEach(([key, value]) => {
    let hrValue = value;
    if(Array.isArray(value) || typeof value == 'object'){
      hrValue = toHumanReadableObject(value);
    }
    result[unCamelCase(key)] = hrValue
  });

  return result;
};


const getReadableData = createSelector([getData], (data) => {
  return toHumanReadableObject(data);
});

const mapStateToProps = (state) => {
  return {
    loader: state.BoDomainServicesPane.loader,
    jsonData: getReadableData(state)
  }
};

const mapDispatchToProps = {
  onDomainGetClick: BoDomainServicesPaneActions.getDomainData,
  onDomainTransferGetClick: BoDomainServicesPaneActions.getDomainTransferData,
  onRegistryCheckClick: BoDomainServicesPaneActions.getDomainRegistryCheckData,
  onPremiumDomainDataClick: BoDomainServicesPaneActions.getPremiumDomainData
};

const BoDomainServicesPaneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoDomainServicesPane);

export default BoDomainServicesPaneContainer;
