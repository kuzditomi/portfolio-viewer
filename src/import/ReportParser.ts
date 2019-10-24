import { Report, Trade } from "../models";

export interface ReportException {
    message: string;
}

const TYPE_COLUMN = 0; // should contain Trades
const HEADER_COLUMN = 1; // should contain header
const ACCOUNT_COLUMN = 2; // should contain nothing for own account
const SYMBOL_COLUMN = 5; // should contain underlying symbol

enum ParseState {
    NotFoundMyTradesYet = 1,
    Trades = 2,
    MyTradesFinished = 3
}

export class ReportParser {
    public Parse(file: File): Promise<Report> {
        let resolve: (report: Report) => void;
        let reject: (error: ReportException) => void;

        const result = new Promise<Report>((_resolve: (report: Report) => void, _reject) => { [resolve, reject] = [_resolve, _reject] });

        console.debug(`Parsing ${file.name}...`);

        var reader = new FileReader();

        reader.onload = () => {
            console.debug('File loaded.');
            const rawCsv = reader.result as string;

            try {
                const report = this.ParseRawData(rawCsv);
                resolve(report);
            } catch {
                reject({ message: "Error while parsing..." });
            }
        };

        reader.readAsBinaryString(file);

        return result;
    }

    private ParseRawData(rawCsv: string): Report {
        console.debug('Processing csvData...');

        const dataLines = rawCsv
            .split('\n')
            .map(line => line.split(','));

        const myTrades = this.ParseMyTrades(dataLines);

        return {
            name: 'ok',
            trades: myTrades
        }
    }

    private ParseMyTrades(data: string[][]): Trade[] {
        let parseState = ParseState.NotFoundMyTradesYet;
        const myTrades = data.reduce<Trade[]>((my: Trade[], line: string[]) => {
            switch (parseState) {
                case ParseState.NotFoundMyTradesYet:
                    if (line[TYPE_COLUMN] === 'Trades' && line[HEADER_COLUMN] === 'Header') {
                        parseState = ParseState.Trades;
                    }
                    return [];
                case ParseState.Trades:
                    if (line[ACCOUNT_COLUMN] !== '') {
                        parseState = ParseState.MyTradesFinished;
                    } else {
                        my.push(this.ParseMyTrade(line));
                    }
                    return my;
                case ParseState.MyTradesFinished:
                default:
                    return my;
            }
        }, []);

        return myTrades;
    }

    private ParseMyTrade(tradeLine: string[]): Trade {
        const optionData = tradeLine[SYMBOL_COLUMN].split('   ');

        const underlying = optionData[0];
        const expirationString = optionData[1].substr(0, 6);
        const expiration = new Date(+expirationString.substr(0, 2)+2000, (+expirationString.substr(2, 2)) - 1, +(expirationString.substr(4, 2)))

        return {
            underlying,
            expiration
        }
    }
}