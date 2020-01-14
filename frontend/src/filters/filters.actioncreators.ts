import { Dispatch } from 'redux';
import { DateFilter, PositionFilter } from './filters.models';
import { dateFilterSelectedAction, positionFilterSelectedAction } from './filters.actions';
import { originalPortfolioSelector } from '../portfolio/portfolio.selector';
import store from '../store';
import { portfolioFilteredAction } from '../portfolio/portfolio.actions';
import { FilterService } from './filter.service';
import { filtersSelector } from './filters.selectors';
import { isCommissionIncludedInPLSelector } from '../options/options.selector';

export const filterByDate = (filter: DateFilter) => (dispatch: Dispatch) => {
    dispatch(dateFilterSelectedAction(filter));

    applyFilters(dispatch);
}

export const filterByPosition = (filter: PositionFilter) => (dispatch: Dispatch) => {
    dispatch(positionFilterSelectedAction(filter));

    applyFilters(dispatch);
}


const filterService = new FilterService();
export const applyFilters = (dispatch: Dispatch) => {
    const portfolio = originalPortfolioSelector(store.getState());
    
    if (!portfolio) {
        return;
    }
    
    const state = store.getState();
    const filters = filtersSelector(state);
    const includeCommission = isCommissionIncludedInPLSelector(state); 

    const filteredPortfolio = filterService.applyFilters(portfolio, filters, includeCommission);
   
    dispatch(portfolioFilteredAction(filteredPortfolio));
}