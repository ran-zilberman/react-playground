import {fetchStock} from '../actions/SearchStocksDlg.js';
import { connect } from 'react-redux';
import SearchStocksDlg from '../components/SearchStocksDlg.jsx';


const mapStateToProps = (state) => {
  return {
    searchInProgress: state.searchInProgress
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: (stockSymbol) => {
      dispatch(fetchStock(stockSymbol));
    }
  }
};

const SearchStockDlgContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchStocksDlg);

export default SearchStockDlgContainer;
