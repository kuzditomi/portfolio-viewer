import { Dispatch } from 'redux';
import { DateFilter, PositionFilter } from './filters.models';
import { dateFilterSelectedAction, positionFilterSelectedAction } from './filters.actions';
import { originalPortfolioSelector } from '../portfolio/portfolio.selector';
import store from '../store';
import { portfolioFilteredAction } from '../portfolio/portfolio.actions';
import { FilterService } from './filter.service';

export const filterByDate = (filter: DateFilter) => (dispatch: Dispatch) => {
    dispatch(dateFilterSelectedAction(filter));

    applyFilters(dispatch);
}

export const filterByPosition = (filter: PositionFilter) => (dispatch: Dispatch) => {
    dispatch(positionFilterSelectedAction(filter));

    applyFilters(dispatch);
}


const filterService = new FilterService();
const applyFilters = (dispatch: Dispatch) => {
    const portfolio = originalPortfolioSelector(store.getState());
    
    if (!portfolio) {
        return;
    }

    const filtersState = store.getState().filters;
    const filteredPortfolio = filterService.applyFilters(portfolio, filtersState);
   
    dispatch(portfolioFilteredAction(filteredPortfolio));
}