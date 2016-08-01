import BoDomainServicesPaneActions from '../../actions/bo-domain-services-pane';
import { connect } from 'react-redux';
import CreateModelDlg from '../../components/CreateModelDlg';


const mapStateToProps = (state) => {
  return {
    loader: state.loader
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDomainGetClick: (domainName) => {
      dispatch(BoDomainServicesPaneActions.domainGet({domainName}));
    },
    onDomainTransferGetClick: (domainName) => {
      dispatch(BoDomainServicesPaneActions.domainTransferGet({domainName}));
    }
  }
};

const BoDomainServicesPaneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateModelDlg);

export default BoDomainServicesPaneContainer;
