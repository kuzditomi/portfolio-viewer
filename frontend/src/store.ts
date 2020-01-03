import { createStore, combineReducers } from "redux";
import portfolio from './portfolio/portfolio.reducer';
import filters from './filters/filters.reducer';
import importHistory from './import/importHistory.reducer';
import columns from './column-picker/columns.reducer';
import authentication from './authentication/authentication.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
    authentication,
    portfolio,
    importHistory,
    filters,
    columns
});

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, composeWithDevTools());