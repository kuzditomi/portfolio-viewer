import { createStore, combineReducers } from "redux";
import portfolio from './portfolio/portfolio.reducer';

export const rootReducer = combineReducers({
    portfolio
});

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer);