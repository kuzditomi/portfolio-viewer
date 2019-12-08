import { AppActionTypes } from '../actions';
import { COLUMNS_ACTIONS } from './columns.actions';
import { ColumnsType, columns } from './models';

export interface ColumnsState {
    selectedColumns: ColumnsType[]
}

const initialState: ColumnsState = {
    selectedColumns: columns.slice()
};

export default function (state = initialState, action: AppActionTypes): ColumnsState {
    switch (action.type) {
        case COLUMNS_ACTIONS.COLUMNS_SELECTED:
            return {
                selectedColumns: action.payload
            }
        default:
            return state;
    }
}
