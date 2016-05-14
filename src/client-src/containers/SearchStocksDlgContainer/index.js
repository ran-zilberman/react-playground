import {fetchStock} from '../../actions/SearchStocksDlg.js';
import { connect } from 'react-redux';
import SearchStocksDlg from '../../components/SearchStocksDlg';


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

const SearchStocksDlgContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchStocksDlg);

export default SearchStocksDlgContainer;
