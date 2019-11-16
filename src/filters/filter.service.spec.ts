import React from 'react';
import { FilterService } from './filter.service';
import { PositionFilter, DateFilter } from './filters.models';
import { Report, Trade, OptionType } from '../models';
import { FiltersState } from './filters.reducer';

const mockTrade: Trade = {
    expiration: new Date(2000, 1, 1),
    strikePrice: 100,
    optionType: OptionType.Call,
    position: 1,
    tradePrice: 50,
    underlying: 'ABC'
}

describe('Filter Service', () => {
    let filterSerive: FilterService;
    let report: Report;

    beforeEach(() => {
        filterSerive = new FilterService();
        report = {
            name: 'test report',
            tradeGroups: []
        };
    });

    describe('filtering by position', () => {
        it('should return all when PositionFilter.All is selected', () => {
            // Arange
            const filter: FiltersState = {
                dateFilter: DateFilter.All,
                positionFilter: PositionFilter.All
            }

            report.tradeGroups = [
                {
                    expiration: mockTrade.expiration,
                    trades: [
                        {
                            ...mockTrade,
                            position: 1
                        },
                        {
                            ...mockTrade,
                            position: -1
                        },
                        {
                            ...mockTrade,
                            strikePrice: 10,
                            position: -1
                        },
                    ],
                    underlying: mockTrade.underlying
                }
            ];

            // Act
            const filteredPortfolio = filterSerive.applyFilters(report, filter);

            // Assert
            expect(filteredPortfolio).toEqual(report);
        });

        it('should return closed trades only when PositionFilter.Close is selected', () => {
            // Arange
            const filter: FiltersState = {
                dateFilter: DateFilter.All,
                positionFilter: PositionFilter.All
            }

            report.tradeGroups = [
                {
                    expiration: mockTrade.expiration,
                    trades: [
                        {
                            ...mockTrade,
                            position: 1
                        },
                        {
                            ...mockTrade,
                            position: -1
                        }
                    ],
                    underlying: mockTrade.underlying
                }
            ];

            // Act
            const filteredPortfolio = filterSerive.applyFilters(report, filter);

            // Assert
            expect(filteredPortfolio.tradeGroups.length).toEqual(0);
        });
    });
});