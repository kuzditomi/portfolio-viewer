import ChartService from "./Chart.service";
import { TradeGroup, OptionType } from '../models';

describe('Chart service', () => {
    describe('PL calculation', () => {
        const mockTradeGroup = (trades: { optionType: OptionType, strikePrice: number }[]): TradeGroup => ({
            expiration: new Date(),
            pl: 1,
            trades: trades.map(trade => ({
                underlying: 'abc',
                position: 1,
                expiration: new Date(),
                optionType: trade.optionType,
                strikePrice: trade.strikePrice,
                tradePrice: 1,
                pl: 1,
                tradeDate: new Date()
            })),
            underlying: 'ABC'
        });

        it('should increase on single call', () => {
            // Arrange
            const prices = [10, 20, 30];
            const strikePrice = 20;
            const tradeGroup: TradeGroup = mockTradeGroup([{ optionType: OptionType.Call, strikePrice: strikePrice }]);

            // Act
            const PLs = prices.map(p => ChartService.getGroupPLAtExpiry(p, tradeGroup));

            // Assert
            expect(PLs).toEqual([-10, 0, 10]);
        });

        it('should decrease on single put', () => {
            // Arrange
            const prices = [10, 20, 30];
            const strikePrice = 20;
            const tradeGroup: TradeGroup = mockTradeGroup([{ optionType: OptionType.Put, strikePrice: strikePrice }]);

            // Act
            const PLs = prices.map(p => ChartService.getGroupPLAtExpiry(p, tradeGroup));

            // Assert
            expect(PLs).toEqual([10, 0, -10]);
        });

        it('should be maximed in call spread', () => {
            // Arrange
            const prices = [10, 20, 25, 30, 35, 40, 50];
            const tradeGroup: TradeGroup = mockTradeGroup([
                { optionType: OptionType.Call, strikePrice: 20 },
                { optionType: OptionType.Call, strikePrice: 40 }
            ]);

            // Act
            const PLs = prices.map(p => ChartService.getGroupPLAtExpiry(p, tradeGroup));

            // Assert
            expect(PLs).toEqual([-10,-10, -5, 0, 5, 10,10]);
        });
    })
})