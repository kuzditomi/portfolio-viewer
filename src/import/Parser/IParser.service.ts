import { Report } from "../../models";

export interface IParser {
    Parse(file: File): Promise<string>;
    ParseRawData(rawText: string): Report;
}