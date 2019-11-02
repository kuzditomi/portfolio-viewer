import { AppActionTypes } from '../actions';
import { DateFilter } from './filters.models';
import { FILTERS_ACTIONS } from './filters.actions';

interface FiltersState {
    dateFilter: DateFilter
}

const initialState: FiltersState = {
    dateFilter: DateFilter.All,
};

export default function (state = initialState, action: AppActionTypes): FiltersState {
    switch (action.type) {
        case FILTERS_ACTIONS.DATE_FILTER_SELECTED: {
            return {
                ...state,
                dateFilter: action.payload
            }
        }
        default:
            return state;
    }
}
