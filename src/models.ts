export enum OptionType {
    Call = 1,
    Put = 2
}
export interface Trade {
    underlying: string;
    position: number;
    expiration: Date;
    optionType: OptionType;
    strikePrice: number;
    tradePrice: number; // signed with positions sign
    pl: number;
    tradeDate: Date;
}

export interface Report {
    name: string;
    tradeGroups: TradeGroup[];
}

export interface TradeGroup {
    underlying: string;
    expiration: Date;
    trades: Trade[];
    pl: number;
}
