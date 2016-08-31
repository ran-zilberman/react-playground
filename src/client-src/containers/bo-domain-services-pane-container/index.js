import BoDomainServicesPaneActions from '../../actions/bo-domain-services-pane';
import { connect } from 'react-redux';
import BoDomainServicesPane from '../../components/bo-domain-services-pane';


const mapStateToProps = (state) => {
  return {
    loader: state.loader
  }
};

const createDomainActionCallback = (dispatch, action) => {
  return (domainName) => {
    dispatch(action({domainName}))
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDomainGetClick: createDomainActionCallback(dispatch, BoDomainServicesPaneActions.getDomainData),
    onDomainTransferGetClick: createDomainActionCallback(dispatch, BoDomainServicesPaneActions.getDomainTransferData),
    onRegistryCheckClick: createDomainActionCallback(dispatch, BoDomainServicesPaneActions.getDomainRegistryCheckData),
    onPremiumDomainDataClick: createDomainActionCallback(dispatch, BoDomainServicesPaneActions.getPremiumDomainData)
  }
};

const BoDomainServicesPaneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoDomainServicesPane);

export default BoDomainServicesPaneContainer;
