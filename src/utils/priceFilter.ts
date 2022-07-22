export function priceFilterBetween(min: string | number, max: string | number) {
  return function (a: any) {
    if (a.priceInNum) {
      return a.priceInNum >= min && a.priceInNum <= max;
    }
    if (a.premiumInNum) {
      return a.premiumInNum >= min && a.premiumInNum <= max;
    }
  };
}
