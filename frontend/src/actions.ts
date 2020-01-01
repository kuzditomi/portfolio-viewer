import { IMPORT_ACTION_TYPES } from './import/import.actions';
import { FILTERS_ACTION_TYPES } from './filters/filters.actions';
import { PORTFOLIO_ACTION_TYPES } from './portfolio/portfolio.actions';
import { COLUMNS_ACTION_TYPES } from './column-picker/columns.actions';

export type AppAction<T, P = undefined> = (payload: P) => { type: T, payload: P }

export type AppActionTypes = IMPORT_ACTION_TYPES |
    FILTERS_ACTION_TYPES |
    PORTFOLIO_ACTION_TYPES |
    COLUMNS_ACTION_TYPES;