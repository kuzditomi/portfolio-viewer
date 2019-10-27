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
}

export interface Report {
    name: string;
    trades: Trade[]
}
