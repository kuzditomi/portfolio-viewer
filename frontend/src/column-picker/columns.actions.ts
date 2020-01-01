import { AppAction } from '../actions';
import { ColumnsType } from './models';

export enum COLUMNS_ACTIONS {
    COLUMNS_SELECTED = "COLUMNS/SELECTED",
}

export const columnsSelected: AppAction<COLUMNS_ACTIONS.COLUMNS_SELECTED, ColumnsType[]> = (payload) => ({
    type: COLUMNS_ACTIONS.COLUMNS_SELECTED,
    payload
});


export type COLUMNS_ACTION_TYPES = ReturnType<typeof columnsSelected>;