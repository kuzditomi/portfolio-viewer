import { Report } from '../models';
import { AppActionTypes } from '../action-types';
import { IMPORT_ACTIONS } from '../import/import.actions';

interface PortfolioState {
    portfolio?: Report
}

const initialState: PortfolioState = {
    portfolio: undefined,
};

export default function (state = initialState, { type, payload }: AppActionTypes): PortfolioState {
    switch (type) {
        case IMPORT_ACTIONS.IMPORT_FROM_HISTORY: {
            return {
                portfolio: payload
            };
        }
        default:
            return state;
    }
}
