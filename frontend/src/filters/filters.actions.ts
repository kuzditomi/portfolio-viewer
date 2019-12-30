import { AppAction } from '../actions';
import { DateFilter, PositionFilter } from './filters.models';

export enum FILTERS_ACTIONS {
    DATE_FILTER_SELECTED = "FILTERS/DATE_FILTER_SELECTED",
    POSITION_FILTER_SELECTED = "FILTERS/POSITION_FILTER_SELECTED",
}

export const dateFilterSelectedAction: AppAction<FILTERS_ACTIONS.DATE_FILTER_SELECTED, DateFilter> = (payload) => ({
    type: FILTERS_ACTIONS.DATE_FILTER_SELECTED,
    payload
});

export const positionFilterSelectedAction: AppAction<FILTERS_ACTIONS.POSITION_FILTER_SELECTED, PositionFilter> = (payload) => ({
    type: FILTERS_ACTIONS.POSITION_FILTER_SELECTED,
    payload
});

export type FILTERS_ACTION_TYPES = ReturnType<typeof dateFilterSelectedAction> | ReturnType<typeof positionFilterSelectedAction>;