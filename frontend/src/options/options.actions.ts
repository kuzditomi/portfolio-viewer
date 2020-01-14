import { AppAction } from '../actions';
import { ColumnsType } from './column-picker/models';

export enum OPTIONS_ACTIONS {
    COLUMNS_SELECTED = "OPTIONS/COLUMNS_SELECTED",
    COMMISSION_INCLUDE_CHANGED = "OPTIONS/COMMISSION_INCLUDE_CHANGED",
}

export const columnsSelected: AppAction<OPTIONS_ACTIONS.COLUMNS_SELECTED, ColumnsType[]> = (payload) => ({
    type: OPTIONS_ACTIONS.COLUMNS_SELECTED,
    payload
});

export const commissionIncludeChanged: AppAction<OPTIONS_ACTIONS.COMMISSION_INCLUDE_CHANGED, boolean> = (payload) => ({
    type: OPTIONS_ACTIONS.COMMISSION_INCLUDE_CHANGED,
    payload
});

export type OPTIONS_ACTION_TYPES = ReturnType<typeof columnsSelected> | ReturnType<typeof commissionIncludeChanged>;