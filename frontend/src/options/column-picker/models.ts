
export const columns = [
    'action',
    'underlying',
    'optionType',
    'strikePrice',
    'position',
    'price',
    'pl',
    'commission',
    'tradeDate',
    'expiration',
    'remainingDays'
] as const;

export type ColumnsType = typeof columns[number]; // Thanks typescript 3.4 !!!

export const columnTitles: { [key in ColumnsType]: string } = {
    action: "",
    underlying: "Underlying",
    strikePrice: "Strike Price",
    optionType: "Option Type",
    position: "Position",
    expiration: "Expiration",
    price: "Trade Price",
    pl: "Realized P/L",
    commission: "Commision",
    tradeDate: "Trade date",
    remainingDays: "Remaining days"
};