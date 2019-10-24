export interface Trade {
    underlying: string;
    expiration: Date;
}

export interface Report {
    name: string;
    trades: Trade[]
}
