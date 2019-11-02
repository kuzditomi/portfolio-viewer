import { createStore, combineReducers } from "redux";
import portfolio from './portfolio/portfolio.reducer';
import filters from './filters/filters.reducer';
import importHistory from './import/importHistory.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
    portfolio,
    importHistory,
    filters
});

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, composeWithDevTools());