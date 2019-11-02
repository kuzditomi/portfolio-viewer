import { AppAction } from '../actions';
import { DateFilter } from './filters.models';

export enum FILTERS_ACTIONS {
    DATE_FILTER_SELECTED = "FILTERS/DATE_FILTER_SELECTED",
}

export const dateFilterSelectedAction: AppAction<FILTERS_ACTIONS.DATE_FILTER_SELECTED, DateFilter> = (payload) => ({
    type: FILTERS_ACTIONS.DATE_FILTER_SELECTED,
    payload
});

export type FILTERS_ACTION_TYPES = ReturnType<typeof dateFilterSelectedAction>;