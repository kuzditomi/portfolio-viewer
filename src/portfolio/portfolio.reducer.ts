import { Report } from '../models';
import { AppActionTypes } from '../actions';
import { IMPORT_ACTIONS } from '../import/import.actions';

interface PortfolioState {
    portfolio?: Report
}

const initialState: PortfolioState = {
    portfolio: undefined,
};

export default function (state = initialState, action: AppActionTypes): PortfolioState {
    switch (action.type) {
        case IMPORT_ACTIONS.REPORT_LOADED_FROM_HISTORY: {
            return {
                portfolio: action.payload
            };
        }
        default:
            return state;
    }
}
