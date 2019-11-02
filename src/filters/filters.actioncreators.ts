import { Dispatch } from 'redux';
import { DateFilter } from './filters.models';
import { dateFilterSelectedAction } from './filters.actions';
import { filteredPortfolioSelector, originalPortfolioSelector } from '../portfolio/portfolio.selector';
import store from '../store';
import { Report } from '../models';
import { portfolioFilteredAction } from '../portfolio/portfolio.actions';

const dateFilters = {
    [DateFilter.All]: (expiration: Date) => true,
    [DateFilter.Expired]: (expiration: Date)=> expiration < new Date(),
    [DateFilter.Open]: (expiration: Date)=> expiration > new Date(),
}

export const filterByDate = (filter: DateFilter) => (dispatch: Dispatch) => {
    dispatch(dateFilterSelectedAction(filter));

    const portfolio = originalPortfolioSelector(store.getState());

    if (!portfolio) {
        return;
    }

    const filteredPortfolio: Report = {
        ...portfolio,
        tradeGroups: portfolio.tradeGroups.filter(td => dateFilters[filter](td.expiration))
    };

    dispatch(portfolioFilteredAction(filteredPortfolio));
}