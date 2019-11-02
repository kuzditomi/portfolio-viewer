import { Report } from '../models';
import { AppActionTypes } from '../actions';
import { IMPORT_ACTIONS } from '../import/import.actions';
import { PORTFOLIO_ACTIONS } from './portfolio.actions';

interface PortfolioState {
    portfolio?: Report;
    filteredPortfolio?: Report;
}

const initialState: PortfolioState = {
    portfolio: undefined,
    filteredPortfolio: undefined
};

export default function (state = initialState, action: AppActionTypes): PortfolioState {
    switch (action.type) {
        case IMPORT_ACTIONS.REPORT_LOADED_FROM_HISTORY: {
            return {
                portfolio: action.payload,
                filteredPortfolio: action.payload
            };
        }
        case PORTFOLIO_ACTIONS.PORTFOLIO_FILTERED: {
            return {
                ...state,
                filteredPortfolio: action.payload
            }
        }
        default:
            return state;
    }
}
