export default function parseQuotes(quotes) {
  quotes = quotes.map((item) => {
    return [
      {
        Amount: item.Amount,
        Currency: item.Currency,
        Years: item.Years,
        CouponType: item.CouponType,
        Spread: item.Spread,
        type: "Spread",
        value: item.Spread,
        isMinimum: false,
      },
      {
        Amount: item.Amount,
        Currency: item.Currency,
        Years: item.Years,
        CouponType: item.CouponType,
        Yield: item.Yield,
        type: "Yield",
        value: item.Yield,
        isMinimum: false,
      },
      {
        Amount: item.Amount,
        Currency: item.Currency,
        Years: item.Years,
        CouponType: item.CouponType,
        "3MLSpread": item["3MLSpread"],
        type: "3MLSpread",
        value: item["3MLSpread"],
        isMinimum: false,
      },
    ];
  });

  return quotes;
}
