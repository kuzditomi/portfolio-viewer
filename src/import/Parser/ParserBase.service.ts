import { IParser } from './IParser.service';
import { Report, Trade, TradeGroup } from '../../models';

export abstract class ParserBase implements IParser {
    private rawImport: string = "";

    public Parse(file: File): Promise<string> {
        let resolve: (raw: string) => void;
        let reject: (error: string) => void;

        this.rawImport = "";

        const result = new Promise<string>(
            (_resolve: (raw: string) => void, _reject) => {
                [resolve, reject] = [_resolve, _reject];
            }
        );

        console.debug(`Parsing ${file.name}...`);

        var reader = new FileReader();

        reader.onload = () => {
            console.debug("File loaded.");
            const rawCsv = reader.result as string;
            this.rawImport = rawCsv;

            try {
                resolve(this.rawImport);
            } catch {
                this.rawImport = "";
                reject("Error while parsing...");
            }
        };

        reader.readAsBinaryString(file);

        return result;
    }

    protected getGroupsFromTrades(trades: Trade[]) {
        const mapByUnderlyingAndExpiration = trades.reduce((map, trade) => {
            const { expiration, underlying } = trade;
            const key = `${underlying} - ${expiration.toLocaleDateString()}`;


            if (!map[key]) {
                map[key] = {
                    underlying,
                    expiration,
                    trades: []
                };
            }

            map[key].trades.push(trade);

            return map;
        }, {} as { [key: string]: TradeGroup })

        return Object.values(mapByUnderlyingAndExpiration)
            .sort((a, b) => +a.expiration - +b.expiration);
    }

    public ParseRawData(rawText: string): Report {
        const myTrades = this.ParseMyTrades(rawText);

        const tradeGroups = this.getGroupsFromTrades(myTrades);

        return {
            name: "ok",
            tradeGroups,
        };
    }

    protected abstract ParseMyTrades(rawText: string): Trade[];
}