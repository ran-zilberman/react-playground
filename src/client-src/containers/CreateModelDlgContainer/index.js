import Actions from '../../actions';
import { connect } from 'react-redux';
import CreateModelDlg from '../../components/CreateModelDlg';


const mapStateToProps = (state) => {
  return {
    createInProgress: state.createInProgress
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateModelClick: (modelName) => {
      dispatch(Actions.CreateModelDlg.createModel({modelName}));
    }
  }
};

const CreateModelDlgContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateModelDlg);

export default CreateModelDlgContainer;
