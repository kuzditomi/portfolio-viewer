import { FilterService } from './filter.service';
import { PositionFilter, DateFilter } from './filters.models';
import { Report, Trade, OptionType } from '../models';
import { FiltersState } from './filters.reducer';

const mockTrade: Trade = {
    id: '1',
    commission: 2,
    expiration: new Date(2000, 1, 1),
    strikePrice: 100,
    optionType: OptionType.Call,
    position: 1,
    tradePrice: 50,
    underlying: 'ABC',
    pl: 1,
    tradeDate: new Date()
}

describe('Filter Service', () => {
    let filterSerive: FilterService;
    let report: Report;

    beforeEach(() => {
        filterSerive = new FilterService();
        report = {
            trades: [],
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
                    commission: 0,
                    pl: 0,
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
            const filteredPortfolio = filterSerive.applyFilters(report, filter, false);

            // Assert
            expect(filteredPortfolio.tradeGroups.length).toEqual(1);
            expect(filteredPortfolio.tradeGroups[0].trades.length).toEqual(3);
        });

        it('should not return tradegroup with open positions only when PositionFilter.Close is selected', () => {
            // Arange
            const filter: FiltersState = {
                dateFilter: DateFilter.All,
                positionFilter: PositionFilter.Closed
            }

            report.tradeGroups = [
                {
                    commission: 0,
                    pl: 0,
                    expiration: mockTrade.expiration,
                    trades: [
                        {
                            ...mockTrade,
                            position: 1
                        }
                    ],
                    underlying: mockTrade.underlying
                }
            ];

            // Act
            const filteredPortfolio = filterSerive.applyFilters(report, filter, false);

            // Assert
            expect(filteredPortfolio.tradeGroups.length).toEqual(0);
        });

        it('should return closed trades only within tradegroup when PositionFilter.Close is selected', () => {
            // Arange
            const filter: FiltersState = {
                dateFilter: DateFilter.All,
                positionFilter: PositionFilter.Closed
            }

            report.tradeGroups = [
                {
                    commission: 0,
                    pl: 0,
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
                            strikePrice: mockTrade.strikePrice+1,
                            position: -1
                        }
                    ],
                    underlying: mockTrade.underlying
                }
            ];

            // Act
            const filteredPortfolio = filterSerive.applyFilters(report, filter, false);

            // Assert
            expect(filteredPortfolio.tradeGroups.length).toEqual(1);
            expect(filteredPortfolio.tradeGroups[0].trades.length).toEqual(2);
        });

        it('should not return tradegroup with closed positions only when PositionFilter.Open is selected', () => {
            // Arange
            const filter: FiltersState = {
                dateFilter: DateFilter.All,
                positionFilter: PositionFilter.Open
            }

            report.tradeGroups = [
                {
                    commission: 0,
                    pl: 0,
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
            const filteredPortfolio = filterSerive.applyFilters(report, filter, false);

            // Assert
            expect(filteredPortfolio.tradeGroups.length).toEqual(0);
        });

        it('should return open trades only within trade group when PositionFilter.Open is selected', () => {
            // Arange
            const filter: FiltersState = {
                dateFilter: DateFilter.All,
                positionFilter: PositionFilter.Open
            }

            report.tradeGroups = [
                {
                    commission: 0,
                    pl: 0,
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
                            strikePrice: mockTrade.strikePrice +1,
                            position: -1
                        },
                    ],
                    underlying: mockTrade.underlying
                }
            ];

            // Act
            const filteredPortfolio = filterSerive.applyFilters(report, filter, false);

            // Assert
            expect(filteredPortfolio.tradeGroups.length).toEqual(1);
            expect(filteredPortfolio.tradeGroups[0].trades.length).toEqual(1);
        });

        it('should understand closed when positions sum to 0', ()=>{
            // Arange
            const filter: FiltersState = {
                dateFilter: DateFilter.All,
                positionFilter: PositionFilter.Closed
            }

            report.tradeGroups = [
                {
                    commission: 0,
                    pl: 0,
                    expiration: mockTrade.expiration,
                    trades: [
                        {
                            ...mockTrade,
                            position: 1
                        },
                        {
                            ...mockTrade,
                            position: 1
                        },
                        {
                            ...mockTrade,
                            tradeDate: new Date(mockTrade.tradeDate.getTime() + 100),
                            position: -2
                        },
                    ],
                    underlying: mockTrade.underlying
                }
            ];

            // Act
            const filteredPortfolio = filterSerive.applyFilters(report, filter, false);

            // Assert
            expect(filteredPortfolio.tradeGroups.length).toEqual(1);
        });
    });
});