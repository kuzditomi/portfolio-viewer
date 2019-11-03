import { AppActionTypes } from '../actions';
import { DateFilter, PositionFilter } from './filters.models';
import { FILTERS_ACTIONS } from './filters.actions';

export interface FiltersState {
    dateFilter: DateFilter,
    positionFilter: PositionFilter
}

const initialState: FiltersState = {
    dateFilter: DateFilter.All,
    positionFilter: PositionFilter.All
};

export default function (state = initialState, action: AppActionTypes): FiltersState {
    switch (action.type) {
        case FILTERS_ACTIONS.DATE_FILTER_SELECTED: {
            return {
                ...state,
                dateFilter: action.payload
            }
        }
        case FILTERS_ACTIONS.POSITION_FILTER_SELECTED: {
            return {
                ...state,
                positionFilter: action.payload
            }
        }
        default:
            return state;
    }
}
