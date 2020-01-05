import { Report, Trade } from '../../models';

export interface IParser {
    Parse(file: File): Promise<Trade[]>;
    CreateReportFromTrades(trades: Trade[]): Report;
}