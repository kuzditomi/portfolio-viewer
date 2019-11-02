import { AppAction } from '../actions';
import { Report } from '../models';

export enum PORTFOLIO_ACTIONS {
    PORTFOLIO_FILTERED
}

export const portfolioFilteredAction: AppAction<PORTFOLIO_ACTIONS.PORTFOLIO_FILTERED, Report> = (payload) => ({
    type: PORTFOLIO_ACTIONS.PORTFOLIO_FILTERED,
    payload
});

export type PORTFOLIO_ACTION_TYPES = ReturnType<typeof portfolioFilteredAction>;