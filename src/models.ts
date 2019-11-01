export enum OptionType {
    Call = 1,
    Put = 2
}
export interface Trade {
    underlying: string;
    position: number;
    expiration: Date;
    optionType: OptionType;
    optionTarget: number;
    price: number;
}

export interface Report {
    name: string;
    tradeGroups: TradeGroup[];
    trades: Trade[];
}

export interface TradeGroup {
    underlying: string;
    expiration: Date;
    trades: Trade[];
}
