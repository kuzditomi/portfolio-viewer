import { createStore, combineReducers } from "redux";
import portfolio from './portfolio/portfolio.reducer';
import filters from './filters/filters.reducer';
import options from './options/options.reducer';
import authentication from './authentication/authentication.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
    authentication,
    portfolio,
    filters,
    options
});

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, composeWithDevTools());