export default function isMinimumQuoteValue(quote, quotes) {
  let quotes2 = quotes.filter((item) => {
    return (
      item.Currency == quote.Currency &&
      item.Years == quote.Years &&
      item.type == quote.type &&
      item.CouponType == quote.CouponType &&
      item.value !== null
    );
  });

  return (
    quote.value ===
    quotes2.reduce((prev, curr) => {
      return curr.value < prev.value ? curr : prev;
    }).value
  );
}
