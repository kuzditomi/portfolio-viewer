import { ParserBase } from './ParserBase.service';
import { Trade, OptionType } from '../../models';

export class FlexQueryParserService extends ParserBase {
    protected ParseMyTrades(rawText: string): Trade[] {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(rawText, "text/xml");

        const trades: Trade[] = Array.from(xmlDoc.getElementsByTagName('Trade')).map(tradeElement => {
            const expiry = tradeElement.getAttribute('expiry')!;
            const tradeDate = tradeElement.getAttribute('tradeDate')!;
            const position = parseInt(tradeElement.getAttribute('quantity')!);

            const trade: Trade = {
                id: '',
                underlying: tradeElement.getAttribute('underlyingSymbol')!,
                position,
                expiration: new Date(+expiry.substr(0, 4), +expiry.substr(4, 2) - 1, +expiry.substr(6, 2)),
                optionType: tradeElement.getAttribute('putCall') === 'P' ? OptionType.Put : OptionType.Call,
                strikePrice: +tradeElement.getAttribute('strike')!,
                pl: 0,
                commission: -1 * (+tradeElement.getAttribute('ibCommission')!),
                tradePrice: (position < 0 ? -1 : 1) * (+tradeElement.getAttribute('tradePrice')!),
                tradeDate: new Date(+tradeDate.substr(0, 4), +tradeDate.substr(4, 2) - 1, +tradeDate.substr(6, 2)),
            }

            return trade;
        });

        return trades;
    }
}