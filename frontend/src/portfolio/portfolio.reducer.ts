import { Report, TradeGroup } from '../models';
import { AppActionTypes } from '../actions';
import { IMPORT_ACTIONS } from '../import/import.actions';
import { PORTFOLIO_ACTIONS } from './portfolio.actions';

interface PortfolioState {
    portfolio?: Report;
    isPortfolioLoading: boolean;
    filteredPortfolio?: Report;
    chartData?: TradeGroup;
}

const initialState: PortfolioState = {
    portfolio: undefined,
    isPortfolioLoading: false,
    filteredPortfolio: undefined,
    chartData: undefined
};

export default function (state = initialState, action: AppActionTypes): PortfolioState {
    switch (action.type) {
        case IMPORT_ACTIONS.REPORT_LOADING: {
            return {
                ...state,
                isPortfolioLoading: true,
            };
        }
        case IMPORT_ACTIONS.REPORT_LOAD_ERROR: {
            return {
                ...state,
                isPortfolioLoading: false,
            };
        }
        case IMPORT_ACTIONS.REPORT_LOADED: {
            return {
                ...initialState,
                portfolio: action.payload,
                isPortfolioLoading: false,
                filteredPortfolio: action.payload,
            };
        }
        case PORTFOLIO_ACTIONS.PORTFOLIO_FILTERED: {
            return {
                ...state,
                filteredPortfolio: action.payload
            }
        }
        case PORTFOLIO_ACTIONS.OPEN_CHART: {
            return {
                ...state,
                chartData: action.payload
            }
        }
        case PORTFOLIO_ACTIONS.CLOSE_CHART: {
            return {
                ...state,
                chartData: undefined
            }
        }
        default:
            return state;
    }
}
