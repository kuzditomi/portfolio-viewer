import { AppActionTypes } from '../actions';
import { IMPORT_ACTIONS } from './import.actions';

interface ImportHistoryState {
    history: string[]
}

const initialState: ImportHistoryState = {
    history: [],
};

export default function (state = initialState, action: AppActionTypes): ImportHistoryState {
    switch (action.type) {
        case IMPORT_ACTIONS.HISTORY_LOADED: {
            return {
                ...state,
                history: action.payload
            }
        }
        default:
            return state;
    }
}
