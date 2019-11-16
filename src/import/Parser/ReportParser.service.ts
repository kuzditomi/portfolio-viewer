import { Trade, OptionType } from '../../models';
import { ParserBase } from './ParserBase.service';

export interface ReportException {
  message: string;
}

const TYPE_COLUMN = 0; // should contain Trades
const HEADER_COLUMN = 1; // should contain header
const ACCOUNT_COLUMN = 2; // should contain nothing for own account
const SYMBOL_COLUMN = 5; // should contain underlying symbol
// const QUANTITY_COLUMN = 7; // should contain contract position quantity
const BUY_QUANTITY_COLUMN = 7;
const BUY_AVG_PRICE_COLUMN = 8;

const SELL_QUANTITY_COLUMN = 10;
const SELL_AVG_PRICE_COLUMN = 11;

enum ParseState {
  NotFoundMyTradesYet = 1,
  Trades = 2,
  MyTradesFinished = 3
}

export class ReportParserService extends ParserBase {
  protected ParseMyTrades(rawCsv: string): Trade[] {
    const dataLines = rawCsv.split("\n").map(line => line.split(","));

    let parseState = ParseState.NotFoundMyTradesYet;
    const myTrades = dataLines.reduce<Trade[]>(
      (my: Trade[], line: string[]) => {
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
            if (line[ACCOUNT_COLUMN] === "Total" ) {
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
    const symbolData = tradeLine[SYMBOL_COLUMN];

    const underlying = symbolData.substr(0,6).trim();
    const expirationString = symbolData.substr(6, 6);
    const expiration = new Date(
      +expirationString.substr(0, 2) + 2000,
      +expirationString.substr(2, 2) - 1,
      +expirationString.substr(4, 2)
    );
    const optionType = symbolData[12] === 'C' ? OptionType.Call : OptionType.Put;
    const optionTarget = Number(symbolData.substr(13, 7)) / 100;

    const position =
      Number(tradeLine[BUY_QUANTITY_COLUMN]) +
      Number(tradeLine[SELL_QUANTITY_COLUMN]);

    const price =
      Number(tradeLine[BUY_AVG_PRICE_COLUMN]) -
      Number(tradeLine[SELL_AVG_PRICE_COLUMN]);

    return {
      underlying,
      expiration,
      position,
      strikePrice: optionTarget,
      optionType,
      tradePrice: price
    };
  }
}
