import React, { PropTypes } from 'react';

const SearchStocksDlg = ({onSearchClick}) => (
  <button onClick={() => onSearchClick('wix')}>Search</button>
);

SearchStocksDlg.propTypes = {
  onSearchClick: PropTypes.func.isRequired
  //completed: PropTypes.bool.isRequired,
  //text: PropTypes.string.isRequired
};


export default SearchStocksDlg

