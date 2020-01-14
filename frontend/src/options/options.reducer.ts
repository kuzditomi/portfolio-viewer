import { OPTIONS_ACTIONS } from './options.actions';
import { ColumnsType, columns } from './column-picker/models';
import { AppActionTypes } from '../actions';

export interface OptionsState {
    selectedColumns: ColumnsType[];
    includeCommissionToPL: boolean;
}

const initialState: OptionsState = {
    selectedColumns: columns.slice(),
    includeCommissionToPL: true
};

export default function (state = initialState, action: AppActionTypes): OptionsState {
    switch (action.type) {
        case OPTIONS_ACTIONS.COLUMNS_SELECTED:
            return {
                ...state,
                selectedColumns: action.payload
            };
        case OPTIONS_ACTIONS.COMMISSION_INCLUDE_CHANGED:
            return {
                ...state,
                includeCommissionToPL: action.payload
            }
        default:
            return state;
    }
}
