import ChartService from "./Chart.service";
import { TradeGroup, OptionType, Trade } from '../models';

describe('Chart service', () => {
    describe('PL calculation', () => {
        const mockTradeGroup = (trades: Partial<Trade>[]): TradeGroup => ({
            expiration: new Date(),
            pl: 1,
            trades: trades.map(trade => ({
                underlying: 'abc',
                position: 1,
                expiration: new Date(),
                optionType: OptionType.Call,
                strikePrice: 10,
                tradePrice: 1,
                pl: 1,
                tradeDate: new Date(),
                ...trade
            })),
            underlying: 'ABC'
        });

        it('should increase on long call', () => {
            // Arrange
            const prices = [18, 19, 20, 21, 22, 23, 24, 25];
            const tradeGroup: TradeGroup = mockTradeGroup([{ optionType: OptionType.Call, strikePrice: 20, tradePrice: 0.1 }]);

            // Act
            const PLs = prices.map(p => ChartService.getGroupPLAtExpiry(p, tradeGroup));

            // Assert
            expect(PLs).toEqual([-10, -10, -10, 90, 190, 290, 390, 490]);
        });

        it('should decrease on long put', () => {
            // Arrange
            const prices = [15, 16, 17, 18, 19, 20, 21, 22];
            const tradeGroup: TradeGroup = mockTradeGroup([{ optionType: OptionType.Put, strikePrice: 20, tradePrice: 0.5 }]);

            // Act
            const PLs = prices.map(p => ChartService.getGroupPLAtExpiry(p, tradeGroup));

            // Assert
            expect(PLs).toEqual([450, 350, 250, 150, 50, -50, -50, -50]);
        });

        it('should be maximed in call spread', () => {
            // Arrange
            const prices = [20, 25, 27.5, 30, 32.5, 35, 40];
            const tradeGroup: TradeGroup = mockTradeGroup([
                { optionType: OptionType.Call, strikePrice: 25, position: 1, tradePrice: 6 },
                { optionType: OptionType.Call, strikePrice: 35, position: -1, tradePrice: 1 }
            ]);

            // Act
            const PLs = prices.map(p => ChartService.getGroupPLAtExpiry(p, tradeGroup));

            // Assert
            expect(PLs).toEqual([-500, -500, -250, 0, 250, 500, 500]);
        });
    })
})