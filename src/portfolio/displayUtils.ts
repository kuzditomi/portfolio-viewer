export const getPriceString = (price: number) => {
    return price < 0 ? `C ${(price*-1).toFixed(2)}` : `D ${price.toFixed(2)}`;
}