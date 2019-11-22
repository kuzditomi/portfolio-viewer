import { AppAction } from '../actions';
import { Report } from '../models';

export enum PORTFOLIO_ACTIONS {
    PORTFOLIO_FILTERED,
    OPEN_CHART,
    CLOSE_CHART,
}

export const portfolioFilteredAction: AppAction<PORTFOLIO_ACTIONS.PORTFOLIO_FILTERED, Report> = (payload) => ({
    type: PORTFOLIO_ACTIONS.PORTFOLIO_FILTERED,
    payload
});

export const openChart: AppAction<PORTFOLIO_ACTIONS.OPEN_CHART> = () => ({
    type: PORTFOLIO_ACTIONS.OPEN_CHART,
    payload: undefined
});

export const closeChart: AppAction<PORTFOLIO_ACTIONS.CLOSE_CHART> = () => ({
    type: PORTFOLIO_ACTIONS.CLOSE_CHART,
    payload: undefined
});

export type PORTFOLIO_ACTION_TYPES = ReturnType<typeof portfolioFilteredAction>
    | ReturnType<typeof openChart>
    | ReturnType<typeof closeChart>;