import { createStore, combineReducers, applyMiddleware  } from "redux";
import thunk from 'redux-thunk';
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

const middleware = [
    thunk,
];

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));