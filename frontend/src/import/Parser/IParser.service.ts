import { Report, Trade } from '../../models';

export interface IParser {
    Parse(file: File): Promise<Trade[]>;
    ParseRawData(rawText: string): Report;
}