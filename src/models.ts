export interface Trade {
    underlying: string;
}

export interface Report {
    name: string;
    trades: Trade[]
}
