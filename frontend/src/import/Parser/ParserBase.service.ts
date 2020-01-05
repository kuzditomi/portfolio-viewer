import { IParser } from './IParser.service';
import { Report, Trade, TradeGroup } from '../../models';
import PLService from '../../calculations/PL.Service';

export abstract class ParserBase implements IParser {
    public Parse(file: File): Promise<Trade[]> {
        let resolve: (trades: Trade[]) => void;
        let reject: (error: string) => void;

        const result = new Promise<Trade[]>(
            (_resolve: (trades: Trade[]) => void, _reject) => {
                [resolve, reject] = [_resolve, _reject];
            }
        );

        console.debug(`Parsing ${file.name}...`);

        var reader = new FileReader();

        reader.onload = () => {
            console.debug("File loaded.");
            const rawCsv = reader.result as string;

            try {
                const trades = this.ParseMyTrades(rawCsv);
                resolve(trades);
            } catch {
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
                    trades: [],
                    pl: 0
                };
            }

            map[key].trades.push(trade);

            return map;
        }, {} as { [key: string]: TradeGroup })

        return Object.values(mapByUnderlyingAndExpiration)
            .sort((a, b) => +a.expiration - +b.expiration)
            .map(group => { group.trades.sort((a,b) => +a.tradeDate - +b.tradeDate); return group; })
            .map(PLService.setPLForGroup);
    }

    public CreateReportFromTrades(trades: Trade[]): Report {
        const tradeGroups = this.getGroupsFromTrades(trades);

        return {
            name: "ok",
            tradeGroups,
        };
    }

    protected abstract ParseMyTrades(rawText: string): Trade[];
}