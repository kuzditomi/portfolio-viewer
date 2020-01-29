import React from 'react';
import PLService from './PL.Service';
import { TradeGroup, Trade, OptionType } from '../models';

const mockGroup: TradeGroup = {
    expiration: new Date(2000, 1, 1),
    underlying: 'ABC',
    pl: 0,
    trades: [],
    commission: 2
};

const mockTrade: Trade = {
    id: '1',
    expiration: mockGroup.expiration,
    optionType: OptionType.Call,
    pl: 0,
    position: 1,
    strikePrice: 100,
    tradeDate: new Date(1999, 11, 30),
    tradePrice: 90,
    underlying: mockGroup.underlying,
    commission: 1,

}

const addDays = (date: Date, days: number): Date => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

describe('PL service', () => {
    function getMultipleTradePL(data: Partial<Trade>[]) {
        const group: TradeGroup = {
            ...mockGroup,
            trades: data.map(d => ({
                ...mockTrade,
                ...d
            }))
        }

        return PLService.getPLForGroup(group);
    }

    it('should set 0 PL for group with all open trade', () => {
        // Arrange
        const group: TradeGroup = {
            ...mockGroup,
            trades: [
                mockTrade
            ]
        }

        // Act
        const pl = PLService.getPLForGroup(group);

        // Assert
        expect(pl).toEqual(-90);
    });

    describe('closed trades calculation in group', () => {
        function getSingleClosedTradePL(openPosition: number, openPrice: number, closePosition: number, closePrice: number) {
            const group: TradeGroup = {
                ...mockGroup,
                trades: [
                    {
                        ...mockTrade,
                        position: openPosition,
                        tradePrice: openPrice
                    },
                    {
                        ...mockTrade,
                        position: closePosition,
                        tradeDate: addDays(mockTrade.tradeDate, 1),
                        tradePrice: closePrice
                    }
                ]
            }

            return PLService.getPLForGroup(group);
        }

        it('should handle SELL TO CLOSE negative PL', () => {
            // Act
            const pl = getSingleClosedTradePL(1, 10, -1, 5);

            // Assert
            expect(pl).toEqual(-5);
        });

        it('should handle SELL TO CLOSE positive PL', () => {
            // Act
            const pl = getSingleClosedTradePL(1, 10, -1, 15);

            // Assert
            expect(pl).toEqual(5);
        });

        it('should handle BUY TO CLOSE negative PL', () => {
            // Act
            const pl = getSingleClosedTradePL(-1, 10, 1, 15);

            // Assert
            expect(pl).toEqual(-5);
        });

        it('should handle BUY TO CLOSE positive PL', () => {
            // Act
            const pl = getSingleClosedTradePL(-1, 10, 1, 5);

            // Assert
            expect(pl).toEqual(5);
        });

        it('should handle multiple closed trades in group', () => {
            // Arrange
            const date = new Date(2000, 2, 2);
            const trades: Partial<Trade>[] = [
                // TRADE A: buy to open
                {
                    tradeDate: date,
                    position: 1,
                    strikePrice: 100,
                    tradePrice: 90,
                },
                // TRADE A: sell to close with 10$ profit
                {
                    tradeDate: addDays(date, 1),
                    position: -1,
                    strikePrice: 100,
                    tradePrice: 100,
                },
                // TRADE B: sell to open
                {
                    tradeDate: date,
                    position: -1,
                    strikePrice: 110,
                    tradePrice: 90,
                },
                // TRADE B: buy to close with 5$ loss
                {
                    tradeDate: addDays(date, 1),
                    position: 1,
                    strikePrice: 110,
                    tradePrice: 95,
                }
            ];

            // Act
            const pl = getMultipleTradePL(trades);

            // Assert
            expect(pl).toEqual(5);
        });

        it('should work for strangle', () => {
            // Arrange
            const group: TradeGroup = {
                underlying: "CAR",
                expiration: new Date("2019-11-14T23:00:00.000Z"),
                trades: [
                    { id: "1", commission: 1, "underlying": "CAR", "position": -1, "expiration": new Date("2019-11-14T23:00:00.000Z"), "optionType": 1, "strikePrice": 36, "pl": 0, "tradePrice": -0.2, "tradeDate": new Date("2019-10-30T23:00:00.000Z") },
                    { id: "2", commission: 1, "underlying": "CAR", "position": -1, "expiration": new Date("2019-11-14T23:00:00.000Z"), "optionType": 2, "strikePrice": 25, "pl": 0, "tradePrice": -0.35, "tradeDate": new Date("2019-10-30T23:00:00.000Z") },
                    { id: "3", commission: 1, "underlying": "CAR", "position": 1, "expiration": new Date("2019-11-14T23:00:00.000Z"), "optionType": 1, "strikePrice": 36, "pl": 0, "tradePrice": 0.05, "tradeDate": new Date("2019-10-31T23:00:00.000Z") },
                    { id: "4", commission: 1, "underlying": "CAR", "position": 1, "expiration": new Date("2019-11-14T23:00:00.000Z"), "optionType": 2, "strikePrice": 25, "pl": 0, "tradePrice": 0.25, "tradeDate": new Date("2019-10-31T23:00:00.000Z") }
                ],
                pl: 0,
                commission: 1
            }

            // Act
            const pl = PLService.getPLForGroup(group);

            // Assert
            expect(pl).toEqual(0.25);
        });
    });
});