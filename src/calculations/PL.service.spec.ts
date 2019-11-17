import React from 'react';
import PLService from './PL.Service';
import { TradeGroup, Trade, OptionType } from '../models';

const mockGroup: TradeGroup = {
    expiration: new Date(2000, 1, 1),
    underlying: 'ABC',
    pl: 0,
    trades: []
};

const mockTrade: Trade = {
    expiration: mockGroup.expiration,
    optionType: OptionType.Call,
    pl: 0,
    position: 1,
    strikePrice: 100,
    tradeDate: new Date(1999, 11, 30),
    tradePrice: 90,
    underlying: mockGroup.underlying
}

const addDays = (date: Date, days: number): Date => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

describe('PL service', () => {
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
        expect(pl).toEqual(0);
    });

    describe('closed trades calculation in group', () => {
        function getSingleClosedTradePL(openPosition: number, openPrice: number, closePosition: number, closePrice: number) {
            // Arrange
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

            // Act
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
    });
});