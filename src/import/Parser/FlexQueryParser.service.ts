import { ParserBase } from './ParserBase.service';
import { Trade, OptionType } from '../../models';

export class FlexQueryParserService extends ParserBase {
    protected ParseMyTrades(rawText: string): Trade[] {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(rawText, "text/xml");

        const trades: Trade[] = Array.from(xmlDoc.getElementsByTagName('Trade')).map(tradeElement => {
            const expiry = tradeElement.getAttribute('expiry')!;
            const position = parseInt(tradeElement.getAttribute('quantity')!);
            return {
                underlying: tradeElement.getAttribute('underlyingSymbol')!,
                position,
                expiration: new Date(+expiry.substr(0,4),+ expiry.substr(4,2), +expiry.substr(6,2)),
                optionType: tradeElement.getAttribute('putCall') === 'P' ? OptionType.Put : OptionType.Call,
                optionTarget: +tradeElement.getAttribute('strike')!,
                price: (position < 0 ? -1 : 1) * (+tradeElement.getAttribute('tradePrice')!)
            } 
        });

        return trades;
    }
}