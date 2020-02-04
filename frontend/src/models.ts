export enum OptionType {
    Call = 1,
    Put = 2
}

export enum TradeType {
    Option = 'OPT',
    Stock = 'STK'
}

export type Trade = OptionTrade | StockTrade;

export interface StockTrade {
    id: string;
    type: TradeType.Stock;
    tradePrice: number;
    pl: number;
    commission: number;
    tradeDate: Date;
}

export interface OptionTrade {
    id: string;
    type: TradeType.Option;
    underlying: string;
    position: number;
    expiration: Date;
    optionType: OptionType;
    strikePrice: number;
    tradePrice: number; // signed with positions sign
    pl: number;
    commission: number;
    tradeDate: Date;
}

export interface Report {
    name: string;
    tradeGroups: TradeGroup[];
    trades: Trade[]
}

export interface TradeGroup {
    underlying: string;
    expiration: Date;
    trades: Trade[];
    commission: number;
    pl: number;
}
