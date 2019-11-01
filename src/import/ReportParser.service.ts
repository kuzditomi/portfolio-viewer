import { Report, Trade, OptionType, TradeGroup } from '../models';

export interface ReportException {
  message: string;
}

const TYPE_COLUMN = 0; // should contain Trades
const HEADER_COLUMN = 1; // should contain header
const ACCOUNT_COLUMN = 2; // should contain nothing for own account
const SYMBOL_COLUMN = 5; // should contain underlying symbol
const QUANTITY_COLUMN = 7; // should contain contract position quantity
const BUY_QUANTITY_COLUMN = 7;
const SELL_QUANTITY_COLUMN = 10;

enum ParseState {
  NotFoundMyTradesYet = 1,
  Trades = 2,
  MyTradesFinished = 3
}

export class ReportParserService {
  private rawImport: string = "";

  public GetRawImport() {
    return this.rawImport;
  }

  public Parse(file: File): Promise<Report> {
    let resolve: (report: Report) => void;
    let reject: (error: ReportException) => void;

    this.rawImport = "";

    const result = new Promise<Report>(
      (_resolve: (report: Report) => void, _reject) => {
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
        const report = this.ParseRawData(rawCsv);
        resolve(report);
      } catch {
        this.rawImport = "";
        reject({ message: "Error while parsing..." });
      }
    };

    reader.readAsBinaryString(file);

    return result;
  }

  public ParseRawData(rawCsv: string): Report {
    console.debug("Processing csvData...");

    const dataLines = rawCsv.split("\n").map(line => line.split(","));
    const myTrades = this.ParseMyTrades(dataLines);

    const tradeGroups = this.getGroupsFromTrades(myTrades);

    return {
      name: "ok",
      tradeGroups,
      trades: myTrades
    };
  }

  private getGroupsFromTrades(trades: Trade[]) {
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
      .sort((a,b) => +a.expiration - +b.expiration);
  }

  private ParseMyTrades(data: string[][]): Trade[] {
    let parseState = ParseState.NotFoundMyTradesYet;
    const myTrades = data.reduce<Trade[]>(
      (my: Trade[], line: string[], index) => {
        switch (parseState) {
          case ParseState.NotFoundMyTradesYet:
            if (
              line[TYPE_COLUMN] === "Trades" &&
              line[HEADER_COLUMN] === "Header"
            ) {
              parseState = ParseState.Trades;
            }
            return [];
          case ParseState.Trades:
            if (line[ACCOUNT_COLUMN] !== "") {
              parseState = ParseState.MyTradesFinished;
            } else {
              my.push(this.ParseMyTrade(line));
            }
            return my;
          case ParseState.MyTradesFinished:
          default:
            return my;
        }
      },
      []
    );

    return myTrades;
  }

  private ParseMyTrade(tradeLine: string[]): Trade {
    const optionData = tradeLine[SYMBOL_COLUMN].split("   ");

    const underlying = optionData[0];
    const expirationString = optionData[1].substr(0, 6);
    const expiration = new Date(
      +expirationString.substr(0, 2) + 2000,
      +expirationString.substr(2, 2) - 1,
      +expirationString.substr(4, 2)
    );
    const optionType = optionData[1][6] === 'C' ? OptionType.Call : OptionType.Put;
    const optionTarget = Number(optionData[1].substr(7, 7)) / 100;

    const position =
      Number(tradeLine[BUY_QUANTITY_COLUMN]) +
      Number(tradeLine[SELL_QUANTITY_COLUMN]);

    return {
      underlying,
      expiration,
      position,
      optionTarget,
      optionType
    };
  }
}