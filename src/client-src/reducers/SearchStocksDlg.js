import {STOCK_SEARCH_IN_PROGRESS, STOCK_DATA_FETCHED} from '../actions/SearchStocksDlg';

const initialState = {};

export default function searchStocksDlg(state = initialState, action) {

    switch (action.type) {

        case STOCK_SEARCH_IN_PROGRESS:
            return onUpdateStock({state, action});
        case STOCK_DATA_FETCHED:
            return onStockValuesArrival({state, action});

        default:
            return state;
    }
}

const onUpdateStock = ({state, action}) => {
    let newState = JSON.parse(JSON.stringify(state));
    newState.searchInProgress = true;
    return newState;
};

const onStockValuesArrival = ({state, action}) => {
    let newState = JSON.parse(JSON.stringify(state));
    newState.searchInProgress = false;
    return newState;
};

